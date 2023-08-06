const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/wikiDB");
//TODO
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Article = mongoose.model("Article", articleSchema);
const article = new Article({
  title: "REST",
  content: "REST is short for REpresentational State Transfer. It's an architectural style for designing APIs.",
});
// article.save();
app.route("/articles")

.get(async function (req, res) {
  try {
   const foundArticle= await Article.find({});
    console.log(foundArticle);
    res.send(foundArticle);

  } catch (error) {
    res.send(error);
  }
})

.post(async function ( req,res) {
  // console.log(req.body.title);
  // console.log(req.body.content);
  try {
    const newArticle= new Article({
      title:  req.body.title,
      content:  req.body.content
    });
   await newArticle.save();
   res.send("document saved");
  } catch (error) {
    res.send(error);
  }

})

.delete(async (req,res)=>{
  try {
  const deletedDocuments =await  Article.deleteMany();
   res.send("Successfully deleted "+ deletedDocuments.deletedCount);
  } catch (error) {
   res.send(error);
  }
});

// write a new get request for specific article using chained express route 
app.route("/articles/:articleTitle")
.get(async(req,res)=>{
 try {
  const specificArticle= await Article.findOne({title:req.params.articleTitle });
  res.send(specificArticle);
 } catch (error) {
  res.send(error);
 }
})
.put(async(req,res)=>{
  try {
   const updates= await Article.findOneAndUpdate(
      {title:req.params.articleTitle}, //condition
     {title:req.body.title , content: req.body.content},// updates
      {new : true} 
   );
    res.send("updated successfully "+updates.content);
  } catch (error) {
    res.send(error);
  }
 
})
.patch(async(req,res)=>{
  try {
   await Article.findOneAndUpdate(
      {title:req.params.articleTitle}, //condition
      {$set: {title:req.body.title}},
      { returnOriginal: false } // Return the updated document
    );
    res.send("successfully patched");
  } catch (error) {
    res.send(error);
  }

})
.delete(async(req,res)=>{
  //delete specific article 
  try {
    const deletedDocument =await  Article.deleteOne({title:req.params.articleTitle});
     res.send("Successfully deleted "+ deletedDocument.deletedCount);
    } catch (error) {
     res.send(error);
    }
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
