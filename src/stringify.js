var util = require('util')
var csvStringify = util.promisify(require('csv-stringify'))
var jsdom = require('jsdom')

var getTimestamp = function (date) {
  return Math.floor(date.getTime() / 1000)
}

var jsonReplacer = function (key) {
  return this[key] instanceof Date ? getTimestamp(this[key]) : this[key]
}

var keys = ['created', 'url', 'title', 'author', 'updated']
var itemsToColumns = function (items) {
  return items.map(function (item) {
    return {
      created: getTimestamp(item.pubdate),
      updated: getTimestamp(item.date),
      title: item.title,
      author: item.author,
      url: item.link
    }
  })
}

var columnsToTable = function (items) {
  return items.reduce(function (table, item) {
    return table.concat([keys.map(function (key) {
      return item[key]
    })])
  },
  [keys])
}

module.exports = function (items, type) {
  if (type === 'xml') {
    var document = new jsdom.JSDOM().window.document
    var node = document.createElement('items')
    itemsToColumns(items).forEach(function (item) {
      var itemElement = document.createElement('item')
      keys.forEach(function (key) {
        var keyElement = document.createElement(key)
        keyElement.appendChild(document.createTextNode(item[key]))
        itemElement.appendChild(keyElement)
      })
      node.appendChild(itemElement)
    })
    return `<?xml version="1.0"?>${'\n' + node.outerHTML}`
  } else if (type === 'csv') {
    return csvStringify(columnsToTable(itemsToColumns(items)))
  } else if (type === 'json') {
    return JSON.stringify(items, jsonReplacer)
  }
}
