const getData = require("./mongodb");

const insertData = async () => {
  const data = await getData();
  const insertedData = await data.insertMany([
    { name: "Samsung S 22", price: 1000, category: "mobile" },
    { name: "IPhone X", price: 800, category: "mobile" },
    { name: "Vivo V50", price: 700, category: "mobile" },
    { name: "Oppo Reno 50", price: 400, category: "mobile" },
  ]);

  if (insertedData.acknowledged)
    return console.log("data inserted successfully !!");
};

module.exports = insertData;
