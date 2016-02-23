"use strict";
var fs = require('fs');


var cust1 = function(name, age) {
  this.name = name
  this.age = age
}

var c = new cust1("Manoj", 37)

console.log(c.name)
console.log(c.age)

fs.readFile('cst.js',{encoding: 'utf-8'},(error, text) => {
  console.log(text)
})

function httpGet(url) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open('GET', url)
    request.onreadystatechange = () => {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    request.onerror = () => {
      reject(new Error('XMLHttpRequest Error :' + this.statusText))
    }
  });
}

httpGet('http://www.google.com')
.then((value)=> {
  console.log('Output :' + value)
},
(value) => {
  console.log('Error :' + value)
})
