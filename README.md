# LDAP Lookup

[![Build Status](https://travis-ci.org/foxbit19/ldaplookup.svg?branch=master)](https://travis-ci.org/foxbit19/ldaplookup)

LDAP lookup library for node.js

## Installing

```
npm i --save ldaplookup
```

## Usage

```js
// load the library
const ldaplookup = require('ldaplookup');

// lookup ldap servers
const addresses = await ldaplookup('your.ldapdomain');

// print the first ip address found
console.log(`First ldap server found: ${addresses[0]}`);
```

### Types

You can also use the library through provided definition types.

```ts
// load the library
import * as ldaplookup from 'ldaplookup';

// lookup ldap servers
const addresses: string[] = await ldaplookup('your.ldapdomain');
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/foxbit19/ldaplookup/tags). 

## Authors

* **Mattia Peretti** - [foxbit19](https://github.com/foxbit19)
* **Tomasz Koziara** - [tomaszkoziara](https://github.com/tomaszkoziara)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details