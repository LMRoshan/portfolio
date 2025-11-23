import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv"
import Authroutes from "./routes/Auth.js";
import MessageRoutes from "./routes/Message.js"
import cors from "cors"
const app = express()
const port = 3070

connectDB();
dotenv.config();

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/auth", Authroutes);
app.use("/api/messages", MessageRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
