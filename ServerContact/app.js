const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

// DB
main().catch((err) => console.log(err));

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 


async function main() {
  await mongoose.connect("mongodb://localhost:27017/admin");
}

const Schema = mongoose.Schema;

const customerInfo = new Schema(
  {
    "info": [
      {
        "name":"string",
        "mail":"string",
        "number":"string",
        "content":"string",
      }
    ]
  },
  {
    collection: "ContactCustomer",
  }
);

const InfoModel = mongoose.model("ContactCustomer", customerInfo);

// Api

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const info = req.body.info;

  InfoModel.create({
      info: info
  })
    .then((data) => {
      res.status(200).json("Thành công");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Listen: ${port}`);
});
