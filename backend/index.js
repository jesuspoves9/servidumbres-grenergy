const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let predios = [];

app.get('/api/health', (req, res) => res.json({ ok: true, now: new Date() }));
app.get('/api/predios', (req, res) => res.json(predios));
app.post('/api/predios', (req, res) => {
  const p = { id: Date.now().toString(), ...req.body };
  predios.unshift(p);
  res.json(p);
});

// servir el frontend si existe
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(path.join(publicDir, 'index.html'))) {
  app.use(express.static(publicDir));
  app.get('*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
  });
} else {
  app.get('/', (req, res) => res.send('API running. Build frontend to see UI.'));
}

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
