// filepath: /c:/Dev/Code/cours node js/crudvue/crudvue/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './router/router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
app.use('/api', router);

// All other routes should serve the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});