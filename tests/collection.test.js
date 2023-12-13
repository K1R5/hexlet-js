import {strict as assert} from 'assert'
import {get} from '../src/get.js';


assert.deepEqual( get({key: 'value'}, 'key'), 'value' );
assert.deepEqual( get({key: 'value'}, 'value-error', 'val'), 'val' );
assert.deepEqual( get({key: 'value'}, 'key', 'val'), 'value'  );

console.log('Все тесты пройдены');
console.log('_____');

console.log(get({ hello: 'world' }, 'hello')); // world
console.log(get({ hello: 'world' }, 'hello', 'kitty')); // 'world'
console.log(get({}, 'hello', 'kitty')); // 'kitty'