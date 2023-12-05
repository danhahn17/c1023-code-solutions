/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];

/* TODO:
 * Demonstrate how to execute an expression only if a variable is truthy.
 * In one expression, log "v1 is truthy" to the console only if `v1` is truthy.
 * In one expression, log "v2 is truthy" to the console only if `v2` is truthy.
 * Expected: v1 message logs, v2 message does not.
 */

v1 && console.log('v1 is truthy');
v2 && console.log('v2 is truthy');

/* TODO:
 * Demonstrate how to assign a "default value" to a variable.
 * In one expression, assign `'default-value'` to the variable `config1` if v1 is falsy.
 * In one expression, assign `'default-value'` to the variable `config2` if v2 is falsy.
 * Log both `config1` and `config2`.
 * Expected: `config1 = { value: 'Something' }`, `config2 = 'default-value'`.
 */

const config1 = v1 || 'default-value';
const config2 = v2 || 'default-value';

console.log(config1);
console.log(config2);

/* TODO:
 * Demonstrate how to assign a "default value" to a variable only if the variable is `undefined`.
 * In one expression, assign `'default-value'` to the variable `cfg1` if v1 is undefined.
 * In one expression, assign `'default-value'` to the variable `cfg2` if v2 is undefined.
 * In one expression, assign `'default-value'` to the variable `cfg3` if v3 is undefined.
 * Log `cfg1`, `cfg2`, and `cfg3`.
 * Expected: `config1 = { value: 'Something' }`, `config2 = ''`, `config3 = 'default-value'`.
 */

const cfg1 = v1 ?? 'default-value';
const cfg2 = v2 ?? 'default-value';
const cfg3 = v3 ?? 'default-value';

console.log(cfg1);
console.log(cfg2);
console.log(cfg3);

/* TODO:
 * Use the shorthand if/else, which is especially useful for variable assignments.
 * In one expression, assign `truthy` to the variable `tern1` if v1 is truthy
 * and assign `falsy` to the same variable if v1 is falsy.
 * Do the same for the variable `tern2` and the variable v2.
 * Log `tern1` and `tern2`.
 * Expected: `tern1 = 'truthy'`, `tern2 = 'falsy'`.
 */

const tern1 = v1 ? 'truthy' : 'falsy';
const tern2 = v2 ? 'truthy' : 'falsy';

console.log('tern1 =', tern1);
console.log('tern2 =', tern2);

/* TODO:
 * Use the shorthand for "if defined".
 * In one expression, assign the `value` property of variable v1 to the variable
 * `oc1`, but only if it is defined.
 * Do the same for the variable `oc2` and the variable v2.
 * Do the same for the variable `oc3` and the variable v3.
 * Log `oc1`, `oc2`, and `oc3`.
 * Expected: `oc1 = 'Something'`, `oc2 = undefined`, `oc3 = undefined`.
 */

const oc1 = v1?.value;
const oc2 = v2?.value;
const oc3 = v3?.value;

console.log(oc1);
console.log(oc2);
console.log(oc3);

/* TODO:
 * Copy an object and add one property.
 * In one expression, make a copy of the variable v1, add the property
 * `foo` with the value `'bar'`, and assign it to the variable `sObj`.
 * Log `sObj`.
 * Expected: `sObj = { value: 'Something', foo: 'bar' }`.
 */

const sObj = { ...v1, foo: 'bar' };
console.log(sObj);

/* TODO:
 * Copy an array and prepend one element.
 * In one expression, make a copy of the variable v4, add the element
 * 100 to the front of the array, and assign it to the variable `sArr`.
 * Log `sArr`.
 * Expected: `sArr = [100, 3, 5, 7, 9]`.
 */

const sArr = [100, ...v4];
console.log(sArr);
