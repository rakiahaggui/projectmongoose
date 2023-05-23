const express = require("express")
const connectdb = require("./config/connect")
const app = express ()
const Port= 5000
 connectdb ()


app.listen(Port, () => {
    console.log(`Server listening on port ${Port}`);
  });