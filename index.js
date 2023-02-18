const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
const { Login } = require("./Login");
const { SignUp } = require("./SignUp");
const { Home } = require("./Home");
const PORT = process.env.PORT || 1234;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ connected: true });
});

app.post("/api/login", express.json(), async (req, res) => {
  const { username, password } = req.body;
  const { code, data } = await Login(username, password);
  res.status(code).json(data);
});

app.post(
  "/api/signup",
  fileUpload({ createParentPath: true }),
  async (req, res) => {
    const { body } = req;
    const data = await SignUp(body);
    res.json(data);
  }
);

app.post("/api/user/", express.json(), async (req, res) => {
  const { username } = req.body;
  res.json(await Home(username));
});

app.listen(PORT, () => {
  console.log(`Server has started on port:${PORT}`);
});
