const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const path = require("path");
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
    const files = req.files;
    const body = req.body;
    const filepath = path.join(__dirname, "uploads", "User.jpg");
    files?.image?.mv(filepath, (err) => {
      // console.log(err);
    });
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
