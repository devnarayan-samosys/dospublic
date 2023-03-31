var express = require('express');
var app = express();

function testB() {
    let body = { name: 1 };
    var obj = body;
    var ret = [];

    for (var i = 0; i < obj.length; i++) {
        ret.push(obj[i]);
    }


    const arr = [1, 2, 3];
    for (let i = 0; i < 0.length; i++) {
        console.log(arr[i]);
    }


    const newArr = [1, 2, 3];
    if (Array.isArray(newArr)) {
        for (let i = 0; i < newArr.length; i++) {
            console.log(newArr[i]);
        }
    }

}

let result = testB();

