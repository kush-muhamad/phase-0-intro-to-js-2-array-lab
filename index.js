// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  let cats1 = [...cats, name];
  return cats1;
}
function prependCat(name) {
  let cats2 = [name, ...cats];
  return cats2;
}
function removeLastCat() {
    const newCats = cats.slice(0, cats.length - 1);
    return newCats;
}
function removeFirstCat() {
  const cat4 =  cats.slice(1)
  return cat4
    
}
