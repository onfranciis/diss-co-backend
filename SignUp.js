const SignUp = async (user) => {
  const { name, family } = user;

  return {
    code: 200,
    data: {
      status: true,
      message: {
        Description: `${name} has been created successfully`,
      },
    },
  };
};

module.exports = { SignUp };
