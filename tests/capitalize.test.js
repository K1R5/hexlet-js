import {strict as assert} from 'assert';
import {capitalize} from '../src/capitalize.js';

assert.deepEqual( capitalize(''), '' );
assert.deepEqual( capitalize('hello'), 'Hello' );

console.log('Все тесты пройдены!');