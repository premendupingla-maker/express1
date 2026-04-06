const express = require("express");
const app = express();
let port = 2000;
const path = require("path");
const {v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


app.use(express.urlencoded({ extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id : uuidv4(),
        usearname : "premendu",
        content : "i love coding......"
    },
    {
        id : uuidv4(),
        usearname : "jis",
        content : "jis is my college....."
    },
    {
        id : uuidv4(),
        usearname : "haur",
        content : "haur is my home station!....."
    },

]

app.get("/posts",(req,res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
});

app.get("/posts/:id",(req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.send("Post not found ");
    }

    res.render("show.ejs",{ post });
});

app.post("/posts",(req,res) => {
   let {usearname,content} = req.body;
   posts.push({id: uuidv4(),usearname,content});
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
     posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.patch("/posts/:id",(req,res) => {
    let {id} = req.params;
    let { content } = req.body;  

    let post = posts.find((p) => id === p.id);

    if (!post) {
        return res.send("Post not found ");
    }

    post.content = content;  

    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res) => {
     let {id} = req.params;
     let post = posts.find((p) => id === p.id);
     res.render("edit.ejs", {post});
});


app.listen(port,() => {
    console.log(`the port is start is ${port}`);
});