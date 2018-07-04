var tape = require('tape')
var igrp = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

function isACharacter (current) {
  return typeof current === 'string'
}

function isANumber (current) {
  return typeof current === 'number'
}

tape('Value', function (t) {
  igrp(names, 'Allday', true, function (err, data) {
    t.ok(data.every(isACharacter))
    t.end()
  })
})

tape('Index', function (t) {
  igrp(names, 'Allday', undefined, function (err, data) {
    t.ok(data.every(isANumber))
    t.end()
  })
})

tape('Array Error', function (t) {
  t.throws(igrp.bind(null, 419, 'Mikey', true))
  t.end()
})
