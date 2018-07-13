'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :

// function multiply(a, b) {
//   let somme = 0;
//   let add;

//   if ((b > 0 && a > 0) || (b < 0 && a < 0)) {
//     a = Math.abs(a);
//     b = Math.abs(b);
//     if (b > 1) {
//       add += a;
//       console.log(`+: ${add}`);
//       b--;
//       console.log(`b: ${b}`);

//       multiply(a, b);
//       b === 0 ? b=1 : b=b;
//     }
//   }

//   if (b < 0 || a < 0) {
//     a = Math.abs(a);
//     b = Math.abs(b);
//     if (b > 1) {
//       a += a;
//       console.log(`somme: ${a}`);
//       b--;
//       multiply(a, b);
//       b === 0 ? b=1 : b=b;
//     }
//     a = -a;
//   }

//   somme = add;
//   return somme;
// }

//****************************************************** */


function multiply(a, b) {
  let add = 0;

  function multiplyByAdd() {
    if ((b > 0 && a > 0) || (b < 0 && a < 0)) {
      a = Math.abs(a);
      b = Math.abs(b);
      if (b > 0) {
        add += a;
        b--;
        multiplyByAdd(a, b);
        b === 0 ? b = 1 : b = b;
      }
    }

    if (b < 0 || a < 0) {
      a = Math.abs(a);
      b = Math.abs(b);
      if (b !== 0 && a !== 0){
        if (b > 0) {
          add += a;
          b--;
          multiplyByAdd(a, b);
          b === 0 ? b = 1 : b = b;
        }
        add = -add;
      } else {
        add = 0;
      }
      

    }

    if (a === 0 && b === 0) {
      console.log(`a: ${a}`);
      add = 0;
    }
    return add;
  }

  multiplyByAdd(a, b);
  return add;
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
