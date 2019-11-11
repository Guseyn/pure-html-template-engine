// eslint disable no-unused-vars

const { ElementWithMappedObject } = require('./async-dom/exports')

window.onload = () => {
  const elm = document.getElementById('elm')
  const obj = {
    name: 'name',
    email: 'email',
    age: 23,
    friends: [
      {
        name: 'name',
        email: 'email'
      }
    ]
  }
  new ElementWithMappedObject(
    elm, obj
  ).call()
}
