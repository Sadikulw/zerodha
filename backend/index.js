require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Holdings } = require('./model/holdingsModel');
const { Positions } = require('./model/PositionsModel');
const { Orders } = require('./model/OrdersModel');
const  {User} = require('./model/UserModel');
const { createSecretToken } = require('./util/SecretToken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const {userVerification} =require("./Middleware/AuthMiddleware")

const app = express();
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3003",
    "http://localhost:3004"
  ],
credentials:true}))

app.use(bodyParser.json());
app.use(cookieParser());


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// add dummy  data to db


// app.get("/holdings", async (req, res) => {
//   const holdingsData = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   holdingsData.forEach((item) => {
//     const holding = new Holdings({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//      holding.save();
//   });
//   res.send("dta added");
// });
// app.get("/positions", async (req, res) => {
//   try {
//     const positionsData = [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//     ];

//     for (const item of positionsData) {
//       const position = new Positions({
//         product: item.product,
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//       });

//       await position.save();
//     }

//     res.send("Data Added Successfully");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error adding data");
//   }
// });

app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await Holdings.find();
    res.json(holdings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/allPositions", async (req, res) => {
  try {
    const positions = await Positions.find();
    res.json(positions);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder=new Orders({
      name:req.body.name,
      qty:req.body.qty,
      price:req.body.price,
      mode:req.body.mode,
    })
    await newOrder.save();
    res.json({message:"Order Placed Successfully"})
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/allOrders", async (req, res) => {
  try {
    const orders = await Orders.find();
    res.json(orders);
  } 
  catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
});
const cookieOptions = {
  httpOnly: true,
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  maxAge: 3 * 24 * 60 * 60 * 1000,
};

app.post("/signup",async(req,res)=>{
  try {
    const {name,email,password} = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(400).json({success:false,message:"User already exists"});
    }
    const user = await User.create({name,email,password});
    const token = createSecretToken(user._id);
    res.cookie("token", token, cookieOptions);
    res.status(201).json({success:true,message:"User created successfully",token});
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:"Internal server error"});
  }
})
app.post("/login",async(req,res)=>{
  try {
    const {email,password} = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({success:false,message:"Invalid email or password"});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({success:false,message:"Invalid email or password"});
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, cookieOptions);
    res.status(200).json({success:true,message:"Login successful",token});
  }
    catch (error) {
      console.error(error);
      res.status(500).json({success:false,message:"Internal server error"});
    }
})
app.get("/profile",userVerification,(req,res)=>{
  res.json(req.user);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
