const Home = (id) => {
  const image = `${process.env.BLOB}`;
  return {
    image: image,
    name: "John Doe",
  };
};

module.exports = { Home };
