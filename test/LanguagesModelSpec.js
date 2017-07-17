import { expect } from 'chai';
import LanguagesModel from '../src/LanguagesModel'

describe('Languages', () => {

  describe('Languages.constructor()', () => {

    it('should be and instance of `Object`', () => {
      const base = new LanguagesModel();
      expect(base).to.be.instanceOf(Object)
    });
    it('should be able to Validate data model thet has been set.', () => {
      expect(false).to.be.true;
    });

  });

});
