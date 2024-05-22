use("crud_db")

// db.animals.insertMany([
//     {kind: 'tiger', weight: 300, name: 'Barsik', predatory: true},
//     {kind: 'moose', weight: 350, name: 'Arnold', predatory: false}, 
//     {kind: 'chicken', weight: 5, name: 'Ryaba', predatory: false},
//     {kind: 'shark', weight: 100, name: 'Sharp', predatory: true},
//     {kind: 'cheetah', weight: 80, name: 
'Chester', predatory: true}
//   ])

db.animals.insertOne({kind:'shark', weight: 90, name:'Jaws', predatory: true})

db.animals.updateMany({kind:'shark'}, {$set:{predatory:true}})