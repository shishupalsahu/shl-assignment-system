const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname))); // Serve index.html and static files

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Recommend endpoint (simple dummy response)
app.post('/recommend', (req, res) => {
  const userInput = req.body.input || 'default';
  res.json({ recommendation: `Recommended result for "${userInput}"` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
