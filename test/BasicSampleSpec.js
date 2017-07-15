import { expect } from 'chai';

describe('Basic', () => {

  describe('Basic.constructor()', () => {

    it('should be and instance of `Object`', () => {
      const basic = new Object();
      expect(basic).to.be.instanceOf(Object)
    });

  });

});
