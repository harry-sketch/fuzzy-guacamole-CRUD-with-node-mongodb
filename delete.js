const getData = require("./mongodb");

const deleteData = async () => {
  const data = await getData();
  const deletedData = await data.deleteOne({ name: "Vivo V50" });
  if (deletedData.acknowledged)
    return console.log("data deleted  successfully");
};

module.exports = deleteData;
