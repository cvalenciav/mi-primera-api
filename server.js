const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi primera API en GitHub!');
});

// Ruta para obtener datos
app.get('/api/data', (req, res) => {
  res.json({ message: 'Esto es un ejemplo de API', status: 'success' });
});

// Ruta para recibir datos
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.json({ received: receivedData, status: 'success' });
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
