const { dbSend, connectDB } = require("./db");

const SignUp = async (user) => {
  await connectDB();
  const { name, image } = user;

  const formData = { ...user, image: `${image}` };
  const { sent } = await dbSend(formData);

  if (sent)
    return {
      code: 200,
      data: {
        status: true,
        message: {
          Description: `${
            name == "" ? "User" : name
          } has been created successfully`,
        },
      },
    };
};

module.exports = { SignUp };
