'use strict';

const express = require('express');
const app = express();

function calculateCircle(r) {
  const area = Math.PI * Math.pow(r, 2);
  const circumference = 2 * Math.PI * r;
  return {
      area: area.toFixed(2),
      circumference: circumference.toFixed(2)
  };
}

app.get('/math/circle/:r', (req, res) => {
  const radius = parseFloat(req.params.r);

  if (isNaN(radius) || radius <= 0) {
      return res.status(400).json({ error: 'Invalid radius' });
  }

  const result = calculateCircle(radius);
  res.json(result);
});

function calculateRect(a,b) {
  const area = a*b;
  const circumference = 2*a+2*b;
  return {
      area: area.toFixed(2),
      circumference: circumference.toFixed(2)
  };
}

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  if (width<=0 || height <= 0 || isNaN(width) || isNaN(height)) {
      return res.status(400).json({ error: 'Invalid radius' });
  }

  const result = calculateRect(width,height);
  res.json(result);
});


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});