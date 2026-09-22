const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/questions", (req, res) => {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: 2
    },
    {
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: 2
    },
    {
      question: "Who wrote the national anthem of India?",
      options: [
        "Rabindranath Tagore",
        "Mahatma Gandhi",
        "Sarojini Naidu",
        "Bankim Chandra Chattopadhyay"
      ],
      answer: 0
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
      ],
      answer: 2
    }
  ];

  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
