import { expect } from 'chai';
import Base from '../src/Base'

describe('Base', () => {

  describe('Base.constructor()', () => {

    it('should be and instance of `Object`', () => {
      const base = new Base();
      expect(base).to.be.instanceOf(Object)
    });

  });

});
