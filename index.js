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
      return res.status(400).json({ error: 'Invalid width and height' });
  }

  const result = calculateRect(width,height);
  res.json(result);
});


function calculatePower(base,expo) {
  const power = Math.pow(base,expo);
  return {
      result: power.toFixed(2),
  }
}

  function calculatePowerSqrt(base,expo) {
    const power = Math.pow(base,expo);
    const sqrt =  Math.sqrt(base);
    return {
        result: power.toFixed(2),
        root: sqrt.toFixed(2)
    }
  }

app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);
  const root = req.query;
  if (exponent<=0 || base <= 0 || isNaN(exponent) || isNaN(base)) {
      return res.status(400).json({ error: 'Invalid base and exponent' });
  }

  if(root == "true"){
    const result = calculatePowerSqrt(base,exponent);
    res.json(result);
  }
  else
  {
    const result = calculatePower(base,exponent);
    res.json(result);
  }
  
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});