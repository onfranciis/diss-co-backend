const { loginDb } = require("./db");
const jwt = require("jsonwebtoken");

const Login = async (username, password) => {
  if (username == "" || password == "") {
    return {
      status: true,
      code: 400,
      data: {
        status: false,
        message: {
          token: null,
          description: "Invalid Details",
        },
      },
    };
  }

  const { sent } = await loginDb(username, password);
  if (sent) {
    const userPayload = { name: username };
    const token = jwt.sign(userPayload, process.env.ACCESS_TOKEN_SECRET);

    return {
      status: true,
      code: 200,
      data: {
        status: true,
        message: {
          token: token,
          description: `${username} has been logged in successfully`,
        },
      },
    };
  } else {
    return {
      status: false,
      code: 400,
      data: {
        status: false,
        message: {
          token: null,
          description: `username or password not found`,
        },
      },
    };
  }
};

module.exports = { Login };
