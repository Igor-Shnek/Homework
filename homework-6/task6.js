"use strict";

function loadJSON(callback) {
    var XMLObj = new XMLHttpRequest();
    XMLObj.open('GET', 'data.json', true);
    XMLObj.onreadystatechange = function () {
        if (XMLObj.readyState === 4 && XMLObj.status === 200) {
            var myArray = JSON.parse(this.responseText);
            callback(myArray);
        }
    };
    XMLObj.send();
}

function getAges(array, resultArray) {
    for (var item of array) {
        var entries = Object.entries(item);
        var index = entries.findIndex(e => e[0] === "age");
        if (index !== -1)
            resultArray.push(entries[index][1]);
        var friendsIndex = entries.findIndex(f => f[0] === "friends");
        if (friendsIndex !== -1)
            getAges(entries[friendsIndex][1], resultArray);
    }
}

loadJSON(function (array) {
    console.log(array);
    var ages = [];
    getAges(array, ages);
    var averageAge = ages.reduce((sum, current) => sum + current)/ages.length;
    console.log("Средний возраст участников: " + averageAge.toFixed(1));
});
