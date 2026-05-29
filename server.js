const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Blog Server Running");
});

app.post("/addBlog", (req, res) => {

    console.log(req.body);

    res.send("Blog Added Successfully");

});

app.get("/blogs", (req, res) => {

    res.send("All Blogs Route");

});

app.delete("/deleteBlog/:id", (req, res) => {

    res.send("Blog Deleted");

});

app.put("/updateBlog/:id", (req, res) => {

    res.send("Blog Updated");

});

app.listen(5000, () => {
    console.log("Server Started");
});