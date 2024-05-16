// подключение к текущей бд
// use("student_db")

// создали коллекцию со строкой
// id - уникальный сгенерированный хэш код
// db.students.insertOne({name: 'Dmitrii'})

// пример вложенности 
// db.students.insertOne({name: 'Donald', age:35, address: {country: 'Germany', city: 'Berlin'}})

// пример записи нескольких объектов в коллекцию
// db.students.insertMany([
//   {name:'Alena', hobby: 'Travel'},
//   {name: 'Eugen', profession: 'Carpenter',}
// ])

// запись одного объекта с несколькими значениями у одного ключа (массив)
// db.students.insertOne({
//   name:'Harry',
//   hobby: ['Magic', 'Flying', 'Traveling']
// })
// db.students.find().sort({_id: -1})
// db.students.find().sort({name: -1})
// db.students.find().sort({hobby: 1})

db.students.findOne({hobby: 'traveling'})