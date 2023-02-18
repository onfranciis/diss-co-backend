// const cloudinary = require("cloudinary").v2;
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const imagePath = path.join(__dirname, "uploads", "User.jpg");

const cloudinaryUpload = async () => {
  const res = await cloudinary.uploader.upload(imagePath, {
    resource_type: "image",
  });
  return res;
};

module.exports = { cloudinaryUpload };
