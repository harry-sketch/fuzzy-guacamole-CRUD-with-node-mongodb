const getData = require("./mongodb");

const updateData = async () => {
  const data = await getData();
  const updateData = await data.updateOne(
    { name: "Oppo Reno 50" },
    { $set: { price: 900 } }
  );
  if ((await updateData).acknowledged)
    return console.log("data updated successfully");
};

module.exports = updateData;
