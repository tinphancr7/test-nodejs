import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
	res.send("Hello World1!");
});

app.listen(port || 3000, () => {
	console.log("Server is listening on port ", port);
});
