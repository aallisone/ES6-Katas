// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {
  it('takes a compare function', function() {
    const found = [true].find(item => item === true);// must use function
    assert.equal(found, true);
  });
  it('returns the first value found', function() {
    const found = [0, 1, 2].find(item => item > 1);// this will find the first value
    assert.equal(found, 2);
  });
  it('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item === 4);// nothing found will return undefined
    assert.equal(found, void 0);
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name}) => name === 'Alice');//will look for value
    assert.equal(found, alice);
  });
});
