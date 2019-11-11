"use strict";

// eslint disable no-unused-vars
var _require = require('./async-dom/exports'),
    ElementWithMappedObject = _require.ElementWithMappedObject;

window.onload = function () {
  var elm = document.getElementById('elm');
  var obj = {
    name: 'name',
    email: 'email',
    age: 23,
    friends: [{
      name: 'name',
      email: 'email'
    }]
  };
  new ElementWithMappedObject(elm, obj).call();
};
