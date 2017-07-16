import { expect } from 'chai';
import PostModel from '../src/PostModel'

describe('PostModel', () => {

  describe('PostModel.static', () => {
    it('should have SCHEMA object property.', () => {
      expect(PostModel.SCHEMA).to.be.instanceof(Object)
    });
  })

  describe('PostModel.constructor()', () => {
    const base = new PostModel();

    it('should be and instance of `object`', () => {
      expect(base).to.be.instanceof(Object)
    })

    it('should have `setModel` function.', () => {
      expect(base.setModel).to.be.instanceof(Function)
    })

    it('should throw if passed is not an `Object`', () => {
      try {
        base.setModel();
      } catch (e) {
        expect(e).to.be.not.null;
      }
      try {
        base.setModel([1,2,3]);
      } catch (e) {
        expect(e).to.be.not.null;
      }
      try {
        base.setModel("");
      } catch (e) {
        expect(e).to.be.not.null;
      }
      try {
        base.setModel(null);
      } catch (e) {
        expect(e).to.be.not.null;
      }
    });
    it('should throw if passed obejct to `setModel` is not VALID.', () => {
      try {
        base.setModel({});
      } catch (e) {
        expect(e).to.be.not.null;
      }
    });

  });

});
