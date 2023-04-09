"use strict";

function every(array, callback, thisArg) {
    var func = callback.bind(thisArg);
    if (array.length) {
        for (var i = 0; i < array.length; i++) {
            if (!func(array[i], i, array))
                return false;
        }
    }

    return true;
}