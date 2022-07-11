const getData = require("./mongodb");

const readFile = async () => {
  const data = await getData();
  const findData = await data.find().toArray();
  console.log(findData);
};

module.exports = readFile;
