import { expect } from 'chai';
import Cli from '../src/Cli'

describe('Cli', () => {

  describe('Cli.constructor()', () => {

    const cli = new Cli();

    it('should be and instance of `Object`', () => {
      expect(cli).to.be.instanceOf(Object)
    });

  });

});
