
function maxName(){
let max = ''
for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > max.length) {
      max = arguments[i];
    }
  }
  console.log(max)
}


maxName('Alex', 'George', 'Michael')


function min(...values) {
    let flatValues = []
  
    values.forEach((value) => {
      if (Array.isArray(value)) {
        flatValues = flatValues.concat(value)
      } else if (typeof value === 'object') {
        flatValues = flatValues.concat(Object.values(value))
      } else {
        flatValues.push(value)
      }
    });
  
    return Math.min(...flatValues)
  }

console.log(min(1, 2)); 
console.log(min([1, 2]));
console.log(min({a: 1,b: 2}));
console.log(min({a: 1, b: 2}, {a: 11, b: 12})); 

