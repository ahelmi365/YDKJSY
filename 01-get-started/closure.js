console.log("Closure");

function range(start, end) {
  const arr = [];
  function getRange(end) {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  if (typeof end === "undefined") {
    return getRange;
  } else {
    return getRange(end);
  }
}

console.log(range(3, 3));
console.log(range(3, 8));
console.log(range(3, 0));

const startAt3 = range(3);
console.log(startAt3(10));



const startAt4 = range(4);
console.log(startAt4(2));