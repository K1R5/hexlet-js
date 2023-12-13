const enlargeArrayImage = (arr) => {
  return arr.map( (valueOne) => {

    return valueOne.map( (valueTwo) => {
      const dubleValues = [];
      dubleValues.push(valueTwo);
      dubleValues.push(valueTwo);
      return dubleValues;
    })
    .flat();      
  })
  .reduce((acc, arr) => {
    acc.push(arr);
    acc.push(arr);
    return acc;
  }, []);  
};

const arr = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];
// ****
// *  *
// *  *
// ****
 
console.log(enlargeArrayImage(arr));
// ********
// ********
// **    **
// **    **
// **    **
// **    **
// ********
// ********
