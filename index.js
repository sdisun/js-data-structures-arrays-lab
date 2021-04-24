const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name){
    console.log(drivers.push("Ralph"));
}

function destructivelyPrependDriver(name){
    console.log(drivers.unshift("Bob"));
}

function destructivelyRemoveLastDriver() {
    console.log(drivers.pop());
}

function destructivelyRemoveFirstDriver() {
    console.log(drivers.shift());
}

function appendDriver(name){
    let newArray = drivers.slice();
    newArray.push("Broom");
    return newArray;
}

function prependDriver(name){
    let newArray2 = drivers.slice();
    newArray2.unshift("Arnold");
    return newArray2;
}

function removeLastDriver(){
    return drivers.slice(0,drivers.length -1);
}

function removeFirstDriver(){
    return drivers.slice(1);
}
