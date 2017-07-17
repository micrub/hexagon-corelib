import { expect } from 'chai';
import Collection from '../src/Collection'

describe('Collection', () => {

  describe('Collection.constructor()', () => {

    it('should be and instance of `Object`', () => {
      const base = new Collection();
      expect(base).to.be.instanceOf(Object)
    });

  });

});
