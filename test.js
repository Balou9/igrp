var tape = require('tape')
var igrp = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

function isANumber (current) {
  return typeof current === 'number'
}

function isACharacter (current) {
  return typeof current === 'string'
}

tape('Indexical grep', function (t) {
  igrp(names, 'Allday', undefined, function (err, data) {
    t.ok(data.every(isANumber))
  })
  t.end()
})

tape('Indexical value', function (t) {
  igrp(names, 'Allday', true, function (err, data) {
    t.ok(data.every(isACharacter))
  })
  t.end()
})
