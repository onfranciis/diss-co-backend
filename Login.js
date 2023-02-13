const Login = async (name, password) => {
  if (name == "admin@test.com" && password == "password") {
    return {
      status: true,
      code: 200,
      data: {
        status: true,
        message: {
          token: "testToken",
          Description: `${name} has been logged in successfully`,
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
          Description: `Something went wrong`,
        },
      },
    };
  }
};

module.exports = { Login };
