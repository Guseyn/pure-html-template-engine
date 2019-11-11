'use strict'

const { AsyncObject } = require('./../cutie/exports')

class ElementWithMappedObject extends AsyncObject {
  constructor (elm, obj) {
    super(elm, obj)
  }

  syncCall () {
    return (elm, obj) => {
      const objName = elm.getAttribute('data-object-name')
      let initialization = `const ${objName} = obj`
      this.iterateChildNodes(
        elm, (node) => {
          this.iterateAttributes(
            node, (attr) => {
              node.setAttribute(
                attr.name,
                // eslint-disable-next-line no-eval
                eval(
                  this.appliedExpression(attr.value, initialization)
                )
              )
            }
          )
        }
      )
      return elm
    }
  }

  appliedExpression (expression, initialization) {
    return expression.replace(/\$\{([^${}]+)\}/g, (match, p1) => {
      return `
        ${initialization}
        ${p1}
      `
    })
  }

  iterateChildNodes (elm, func) {
    elm.childNodes.forEach(node => {
      func(node)
      this.iterateChildNodes(node, func)
    })
  }

  iterateAttributes (elm, func) {
    if (elm.attributes) {
      for (let i = 0; i < elm.attributes.length; i++) {
        func(elm.attributes[i])
      }
    }
  }
}

module.exports = ElementWithMappedObject
