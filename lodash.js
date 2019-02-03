var _ = require('lodash');
var images = [
    { 'src': 'http://www.placehold.it/600x200', 'like': 10 },
    { 'src': 'http://www.placehold.it/600x200', 'like': 30 },
    { 'src': 'http://www.placehold.it/600x200', 'like': 40 }
  ];

 var a = _.filter(images, function(img) { return img.like > 20; })
 var c = _.toArray(a)
 var b = _.shuffle(images)
 console.log('a',a[0].like)
 console.log('a',a[1].like)
 console.log('b',b)
 console.log('c',c)
 console.log( _.eq(4, 4) ); // true
console.log( _.eq(3, "3") ); // false
console.log( _.eq("google", "Google") ); // false
console.log( _.eq("jindatheme", "jindatheme") ); // true
console.log( _.gt(7, 2) ); // true
console.log( _.lt(3, 1) ); // false
console.log( _.toArray({ 'a': 'Steve', 'b': 'Maria' }) ); // ['Steve', 'Maria']
console.log( _.toInteger(7700.98) ); // 7700
console.log( _.min([990, 448, 2220, 907]) ); // 448
console.log( _.max([990, 448, 2220, 907]) ); // 2220

var users = [
  { 'name': 'Bill', 'age': 40 },
  { 'name': 'Steve', 'age': 55 },
  { 'name': 'Frank', 'age': 38 ,"name1":"xxx"}
];
console.log( _.last(users) ); // frank object
console.log( _.map(users, 'name') ); // ["Bill", "Steve", "Frank"]
console.log( _.isArray(users) ); // true
console.log(users.keys())
console.log(_.includes(_.keys(users), "name"))

console.log(_.get(users[0], 'name', null))
console.log(Object.keys(users[0]))

_.each(users, (user) => {
  const name = _.get(user, 'name1', null)
  if (name) {
   console.log('true')
  }else
  {
    console.log('false')
  }
})