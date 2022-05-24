/**
 *
 * @param max
 *
 * PSEUDOCODE:
 * define empty array for result
 * create a count variable
 * initiate count variable at 1
 *  while count<=max
 *      open an if statement
 *          check whether count variable is a multiple of 15
 *          if true, push string 'FizzBuzz' to result array
 *      else,
 *      open an if statement
 *          check whether count variable is a multiple of 5
 *          if true, push string 'Buzz' to result array
 *      else,
 *      open an if statement
 *          check whether count variable is a multiple of 3
 *          if true, push string 'Fizz' to result array
 *      else,
 *      push count onto result array
 *  count +=1
 * return result array
 */

export default function fizzbuzz(max: number): (string | number)[] {
  const resultArray = [];
  let count = 1;
  while (count <= max) {
    if (count % 15 === 0) {
      resultArray.push("FizzBuzz");
    } else if (count % 5 === 0) {
      resultArray.push("Buzz");
    } else if (count % 3 === 0) {
      resultArray.push("Fizz");
    } else {
      resultArray.push(count);
    }
    count++;
  }
  return resultArray;
}
console.log(fizzbuzz(15));
