import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import portfolioRoute from './routes/portfolioRoute.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/portfolio', portfolioRoute())

app.get("/", (req, res) => {
  res.send("<h1> My Portfolio</h1>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
