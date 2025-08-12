// Simple Categories API
// File: index.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const categories = [
  "Web Design",
  "Web Development",
  "Mobile App Development",
  "WordPress Development",
  "Shopify Development",
  "E-Commerce Websites",
  "Landing Page Design",
  "UI/UX Design",
  "Graphics Design",
  "Logo Design",
  "Thumbnail Design",
  "Banner Design",
  "Video Editing",
  "Animation & Motion Graphics",
  "Whiteboard Animation",
  "Photography Editing",
  "Digital Marketing",
  "Social Media Marketing",
  "SEO Services",
  "Content Writing",
  "Translation Services",
  "Game Development",
  "Chatbot Development",
  "API Integration",
  "Cybersecurity Services",
  "Cloud Computing",
  "DevOps Services",
  "Blockchain Development",
  "Data Analytics",
  "Software Testing & QA"
];

app.get('/api/categories', (req, res) => {
  res.json({ count: categories.length, categories });
});

app.get('/', (req, res) => {
  res.send('Categories API is running. GET /api/categories to fetch list.');
});

app.listen(port, () => {
  console.log(`Categories API listening on port ${port}`);
});
