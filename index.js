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

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});