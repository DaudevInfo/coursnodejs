import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')



const express = require('express');
//const path = require('path');
const router = require('./router/router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, 'dist')));

// All other routes should serve the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

