const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// LOGIN / API
app.post("/auth", (req, res) => {
  const { username, password } = req.body;

  if (username === "HACKER21" && password === "89304") {
    return res.json({
      admin: true,
      data: [
        { username: "user1", password: "1234" },
        { username: "user2", password: "abcd" }
      ]
    });
  }

  return res.json({ message: "❌ Identifiants incorrects" });
});

// IMPORTANT pour Vercel
module.exports = app;
