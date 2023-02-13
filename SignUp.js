const SignUp = async (user) => {
  const { name, family } = user;

  return {
    status: true,
    code: 400,
    data: {
      status: false,
      message: {
        Description: `${name} has been created successfully`,
      },
    },
  };
};

module.exports = { SignUp };
