import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import testPackage from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof testPackage, 'function')
  },
  async 'calls package without error'() {
    await testPackage()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await testPackage({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
