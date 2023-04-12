import express from "express";
import path from "path";
import homepageRouter from "./routes/homepageRoutes.js";

const __dirname = path.resolve();

// Create express App
const app = express();

// Set views engine
app.set("view engine", "ejs");

// Set views directory
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

// Use routers
app.use(homepageRouter);

// Create server and Listenning
app.listen(8082, () => {
    console.log("Server is listenning at port 8082");
});
