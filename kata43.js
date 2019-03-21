// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', function() {
    const arr = [];//had to empty array
    const iterator = arr.values();
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('use `iterator.next()` to drop first value', function() {
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.next();//had to make it a next iterator
    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  it('empty array contains no values', function() {
    const arr = [...[...[...[...'']]]];//emptied the string so the array had no value
    const values = [...arr.values()];
    assert.equal(values.length, 0);
  });
  it('a sparse array without real values has values though', function() {
    const arr = [ ,, ];//i added the empty positions
    const keys = [...arr.values()];
    assert.deepEqual(keys, [void 0, void 0]);
  });
  it('also includes holes in sparse arrays', function() {
    const arr = ['a',,'c'];//added empty position between a and c
    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });
});
