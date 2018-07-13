'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(sentence){
    let tabSentence = sentence.toLowerCase().split(' ');
    let firstLettreUppercase = tabSentence.map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
    return firstLettreUppercase;
}

// * Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('qsd qsd qsd'), 'Qsd Qsd Qsd')
assert.strictEqual(jadenCase('STR STR STR'), 'Str Str Str')
assert.strictEqual(jadenCase('zapZAP'), 'Zapzap')
// End of tests */
