use ("cars_db");


db.cars.insertMany([
  { brand: "BMW", price: 20000, model: "X5", year: 2015, horsepower: 300 },
  { brand: "Audi", price: 25000, model: "A4", year: 2016, horsepower: 220 },
  { brand: "BMW", price: 18000, model: "X3", year: 2014, horsepower: 250 },
  { brand: "Toyota", price: 15000, model: "Camry", year: 2015, horsepower: 200 },
  { brand: "Ford", price: 17000, model: "Mustang", year: 2018, horsepower: 350 },
  { brand: "Honda", price: 16000, model: "Accord", year: 2017, horsepower: 180 },
  { brand: "Chevrolet", price: 19000, model: "Malibu", year: 2015, horsepower: 240 },
  { brand: "Tesla", price: 35000, model: "Model 3", year: 2020, horsepower: 450 },
  { brand: "Nissan", price: 14000, model: "Altima", year: 2016, horsepower: 150 },
  { brand: "Hyundai", price: 13000, model: "Elantra", year: 2015, horsepower: 160 }
]);

db.cars.insertOne({ brand: "Mazda", price: 21000, model: "CX-5", year: 2019, horsepower: 200 });

db.cars.insertMany([
    { brand: "Jeep", price: 23000, model: "Cherokee", year: 2018, horsepower: 270 },
    { brand: "Kia", price: 12000, model: "Soul", year: 2017, horsepower: 130 }
  ]);


  db.cars.findOne({ brand: "BMW" });
  db.cars.find({ year: 2015 }).toArray();


  db.cars.updateOne(
    { brand: "Toyota" },
    { $set: { price: 16000 } }
  );
  db.cars.updateMany(
    { year: 2015 },
    { $set: { year: 2020 } }
  );

  db.cars.deleteOne({ brand: "Hyundai" });

  db.cars.aggregate([
    { $match: { price: { $lt: 20000 } } },
    { $sort: { price: -1 } }
  ]);
  

  db.categories.insertMany([
    { type: "Sedan" },
    { type: "SUV" },
    { type: "Truck" },
    { type: "Convertible" },
    { type: "Hatchback" },
    { type: "Coupe" },
    { type: "Minivan" },
    { type: "Wagon" }
  ]);

  db.cars.updateMany(
    { brand: "BMW" },
    { $set: { category: "SUV" } }
  );
  
  db.cars.updateMany(
    { brand: "Toyota" },
    { $set: { category: "Sedan" } }
  );

  db.cars.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "type",
        as: "categoryDetails"
      }
    }
  ]).pretty();

  db.cars.aggregate([
    { $sample: { size: 1 } }
  ]).pretty();
  
    