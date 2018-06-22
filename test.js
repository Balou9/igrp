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
  t.ok(igrp(names, 'Mikey').every(isANumber))
  t.ok(igrp(names, '419').every(isANumber))
  t.end()
})

tape('Second grep', function (t) {
  t.ok(igrp(names, 'Mikey', true).every(isACharacter))
  t.ok(igrp(names, '419', true).every(isACharacter))
  t.end()
})
