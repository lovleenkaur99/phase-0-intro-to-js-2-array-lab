// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() { 
    cats.push("Ralph")
}
function destructivelyPrependCat() { 
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() { 
    cats.pop()
}

function destructivelyRemoveFirstCat() { 
    cats.shift()
}

function appendCat(name) { 
    let newCats = [...cats]
    newCats.push(name)

    return newCats;
}

function prependCat(name) { 
    let newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}

function removeLastCat(name) { 
    let newCats = [...cats];
    newCats.pop(name);
    return newCats;
}

function removeFirstCat(name) { 
    let newCats = [...cats];
    newCats.shift(name);
    return newCats;
}