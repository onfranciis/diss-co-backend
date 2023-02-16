const { homeFetch } = require("./db");

const Home = async (id) => {
  const { name, family, image } = await homeFetch(id);
  const fullName = `${name} ${family}`;
  if (!name) return { name: `${fullName} Not Found` };
  return {
    image: image,
    name: fullName,
  };
};

module.exports = { Home };
