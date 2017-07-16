import { expect } from 'chai';
import PostModel from '../src/PostModel'

describe('PostModel', () => {

  describe('PostModel.constructor()', () => {

    it('should be and instance of `Object`', () => {
      const base = new PostModel();
      expect(base).to.be.instanceOf(Object)
    });

  });

});
