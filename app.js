require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user_router");

// app.get("/test", (req, res) => {

//      res.json({
//         result: "Success",
//         message: "REST APIs are working" 

//      });

//  });

app.use(express.json());

app.use("/users", userRouter);
app.listen(process.env.APP_PORT, () => {

   console.log("Server up and running on PORT : ", process.env.APP_PORT); 

});








