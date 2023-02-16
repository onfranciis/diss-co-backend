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
          Description: "Invalid Details",
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
          Description: `${username} has been logged in successfully`,
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
          Description: `username or password not found`,
        },
      },
    };
  }
};

module.exports = { Login };
