# igrp

[![build status](http://img.shields.io/travis/balou9/igrp.svg?style=flat)](http://travis-ci.org/balou9/igrp) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/balou9/igrp?branch=master&svg=true)](https://ci.appveyor.com/project/balou9/igrp)

***

igrp performs an indexical pattern match and returns the respective index

***

## Get it!

```
npm install -save igrp
```

## Usage

```js
var igrp = require('igrp')
var names = ['Mark', 'Thomas', 'Mike', 'Mark', 'Thomas', 'Mike']

igrp(names, 'Thomas', true, function (err, data) {
  if (err) throw err
  console.log(data)
})
```

***

## API

### `igrp(arr, pattern, value)`

***

## License

[MIT](./license.md)
