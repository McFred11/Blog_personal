import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-personal')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// Modelo de Post
const postSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  contenido: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true,
    trim: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  categoria: {
    type: String,
    required: true,
    enum: ['Tecnología', 'Viajes'] // Valores permitidos
  }
});

const Post = mongoose.model('Post', postSchema);

// Rutas

// Obtener todos los posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ fecha: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un post por ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo post
app.post('/api/posts', async (req, res) => {
  try {
    const { titulo, contenido, autor, categoria } = req.body;
    const nuevoPost = new Post({
      titulo,
      contenido,
      autor,
      categoria
    });
    const postGuardado = await nuevoPost.save();
    res.status(201).json(postGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un post
app.put('/api/posts/:id', async (req, res) => {
  try {
    const { titulo, contenido, autor, categoria } = req.body;
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { titulo, contenido, autor, categoria },
      { new: true, runValidators: true }
    );
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un post
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post no encontrado' });
    }
    res.json({ message: 'Post eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

// Endpoint para el formulario de contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 1. Configura el transportador de Nodemailer
  // Usa tus credenciales de email del archivo .env
  let transporter = nodemailer.createTransport({
    service: 'gmail', // o 'outlook', 'hotmail', etc., dependiendo de tu proveedor
    auth: {
      user: process.env.EMAIL_USER, // Tu correo electrónico (ej. mi.correo@gmail.com)
      pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación o contraseña de email
    },
  });

  // 2. Define las opciones del correo a enviar
  let mailOptions = {
    from: process.env.EMAIL_USER, // El remitente del correo (tu propio email)
    to: 'tu_correo_destino@example.com', // **¡IMPORTANTE! Reemplaza esto con el correo al que quieres recibir los mensajes**
    subject: `Mensaje de Contacto de ${name}: ${subject}`,
    html: `
      <p>Has recibido un nuevo mensaje desde tu formulario de contacto:</p>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  // 3. Envía el correo
  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito!');
    res.status(200).json({ message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor de correo corriendo en http://localhost:${PORT}`);
});