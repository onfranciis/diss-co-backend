const { loginDb } = require("./db");

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
    return {
      status: true,
      code: 200,
      data: {
        status: true,
        message: {
          token: "testToken",
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
