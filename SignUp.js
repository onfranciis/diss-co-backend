const { cloudinaryUpload } = require("./Cloudinary");
const { dbSend, connectDB } = require("./db");

const SignUp = async (user, files) => {
  const { name } = user;
  const { url } = await cloudinaryUpload(files);
  const formData = { ...user, image: url };
  const { sent } = await dbSend(formData);
  connectDB();

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
