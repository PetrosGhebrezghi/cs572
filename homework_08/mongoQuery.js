
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

client.connect(function (err) {

    const db = client.db('homework_08');
    const collection = db.collection('restaurants');
//Query----------------------- 1
    // const result1 = collection.find({});
    // result1.forEach(function (data) {
    //     console.log(data);
    // });

//Query----------------------- 2
// const result2 = collection.find({})
//.project( {"restaurant_id" : 1,"name":1,"district":1,"cuisine" :1});
// result2.forEach(function(data){
//     console.log(data)
// });

//Query----------------------- 3
// const result3 = collection.find({})
//.project({"restaurant_id" : 1,"name":1,"district":1,"cuisine" :1,"_id":0});
// result3.forEach(function(data){
//     console.log(data);
// });

//Query----------------------- 4
// const result = collection.find({})
// .project({"restaurant_id" : 1,"name":1,"district":1,"address.zipcode":1,"_id":0});
// result.forEach(function(data){
//     console.log(data);
//});

//Query----------------------- 5
// const result = collection.find({})
// .project({"district": "Bronx"});
// result.forEach(function(data){
//     console.log(data);
//});
//Query----------------------- 6
// const result = collection.find({})
// .project({"district": "Bronx"}).limit(5);
// result.forEach(function(data){
//     console.log(data);
// });

//Query----------------------- 7
// const result = collection.find({})
// .project({"district": "Bronx"}).skip(5).limit(5);
// result.forEach(function(data){
//     console.log(data);
// });

//Query----------------------- 8????
// const result = collection.find({}, {"address":"coord":{$elemMatch:{$lt:-95.754168}}})
// result.forEach(function(data){
//     console.log(data);
// });

//Query----------------------- 9 ??
// const result = collection.find({}, {$and:
//     [
//        {"cuisine" : {$ne :"American "}},
//        {"grades": {$elemMatch: {"score": {$gt : 70}}}},
//        {"address":{$elemMatch:{ "coord": {$lt : -65.754168}}}}
//     ] 
// })
//     result.forEach(function(data){
//     console.log(data);
//});

//Query----------------------- 10
// const result = collection.find({name:{$regex:'$(Wil)'}})
// .project({restaurant_id:1, name:1, district:1, cuisine:1});
// result.forEach(function(data){
//     console.log(data)
// });

//Query----------------------- 11

// const result = collection.find({'name':{$regex:'(ces)$'}})
// .project({"restaurant_id":1, "name":1, "district":1, "cuisine":1});
// result.forEach(function(data){
// console.log(data);
// });

//Query----------------------- 12
// const result = collection.find({name:{$regex:'.*Reg.*'}})
// .project({restaurant_id:1, name:1, district:1, cuisine:1});
// result.forEach(function(data){
// console.log(data);
// });

//Query----------------------- 13
// const result = collection.find({$and:[{district:'Bronx'},{cuisine:{$in:['American','Chinese']}}]})
// result.forEach(function(data){
//     console.log(data);
//     });

//Query----------------------- 14
// const result = collection.find({district:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}})
// .project({restaurant_id:1, name:1, district:1, cuisine:1})
// result.forEach(function(data){
//     console.log(data);
//     });

//Query----------------------- 15
// const result = collection.find({district: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}})
// .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
// result.forEach(function(data){
//     console.log(data);
// });

//Query----------------------- 16
// const result=collection.find({"grades.score": {$lte: 10}})
// .project({restaurant_id: 1, name: 1, district: 1, cuisine: 1})
// result.forEach(function(data){
// console.log(data);
// });

//Query----------------------- 17
// const result=collection.find({"address.coord.1": {$gt: 42, $lte: 52}})
// .project({"restaurant_id": 1, "name": 1, "address.coord":1})
// result.forEach(function(data){
// console.log(data);
// });

//Query----------------------- 18
// const result=collection.find().sort({name:1});
// result.forEach(function(data){
// console.log(data);
// });

// Query----------------------- 19
// const result=collection.find().sort({name:-1});
// result.forEach(function(data){
// console.log(data);
// });

//Query----------------------- 20
// const result=collection.find().sort({cuisine:1, district:-1});
// result.forEach(function(data){
// console.log(data);
// });

//Query----------------------- 21
// const result=collection.find({"address.street":{$exists:true}});
// result.forEach(function(data){
// console.log(data);
// });

//Query----------------------- 22
// const result=collection.find({"address.coord": {$type: "double"} })
// result.forEach(function(data){
// console.log(data);
// });

//Query----------------------- 23
const result=collection.find({name:{$regex:'($Mad)'}})
.project({name:1, district:1, "address.coord":1, cuisine:1})
result.forEach(function(data){
console.log(data);
});

})