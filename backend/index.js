require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

// Demo in-memory store (replace with Postgres in production)
let predios = [];

app.get('/api/predios', (req,res)=> res.json(predios));
app.post('/api/predios', (req,res)=> {
  const p = { id: Date.now().toString(), ...req.body, checks: [], docs: [], history: [] };
  predios.unshift(p);
  res.json(p);
});
app.get('/api/predios/:id', (req,res)=> {
  const p = predios.find(x=>x.id===req.params.id);
  if(!p) return res.status(404).json({error:'not found'});
  res.json(p);
});
app.put('/api/predios/:id', (req,res)=> {
  predios = predios.map(x=> x.id===req.params.id ? {...x,...req.body} : x);
  res.json({ok:true});
});

app.post('/api/upload-mock', (req,res)=> {
  // Mock for file upload - in production use S3 presigned URLs
  res.json({url:'https://example.com/mock-file.pdf', id: 'doc_'+Date.now()});
});

app.listen(PORT, ()=> console.log('Server listening on', PORT));
