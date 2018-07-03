# @mnp-test/test-package

[![npm version](https://badge.fury.io/js/@mnp-test/test-package.svg)](https://npmjs.org/package/@mnp-test/test-package)

`@mnp-test/test-package` is a new Node.js npm package. test-description

```sh
yarn add -E @mnp-test/test-package
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`testPackage(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)

## API

The package is available by importing its default function:

```js
import testPackage from '@mnp-test/test-package'
```

### `testPackage(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example */
import testPackage from '@mnp-test/test-package'

(async () => {
  await testPackage()
})()
```

---

(c) [MNP][1] 2018

[1]: https://mnpjs.org
