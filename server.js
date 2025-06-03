const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.render("index.ejs", { cssFile: "index.css" });
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs", { cssFile: "blogs.css" });
});

app.get("/profile", (req, res) => {
    res.render("profile.ejs", { cssFile: "profile.css" });
});

app.get("/rules", (req, res) => {
    res.render("rules.ejs", { cssFile: "rules.css" });
});

app.get("/about", (req, res) => {
    res.render("about.ejs", { cssFile: "about.ejs" });
})

app.post("/register", (req, res) => {
    
});

app.post("/login", (req, res) => {

});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}!`)
    console.log(`Can access the server with this link: http://localhost:${PORT}`);
})