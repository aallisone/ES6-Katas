// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    const {x} = {x: 1};//               look up   ^^
    assert.equal(x, 1);
  });
  describe('nested', () => {
    it('multiple objects', () => {
      const magic = {first: 23, second: 42};
      const {first, second} = magic;
      assert.equal(second, 42);
    });
    it('object and array', () => {
      const {z: [y,x]} = {z: [23, 42]};
      assert.equal(x, 42);
    });
    it('array and object', () => {
      const [ ,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];//match the pattern
      assert.equal(lang, 'ES6');
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      const {z} = {x: 1, y: 2};//make the ref be missin
      assert.equal(z, void 0);
    });
    it('destructure from builtins (string)', () => {
      const {substr} = 'Hello World!';
      assert.equal(substr, String.prototype.substr);
    });
  });
});
