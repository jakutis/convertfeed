var parseFeed = require('./parse-feed')
var stringify = require('./stringify')

if (process.argv.includes('--help')) {
  console.log(`Usage: convertfeed [--type=Type] [Feed URL]

Type - defaults to json, but can also be xml or csv
Feed URL - needed if you want to resolve relative URLs in your feed`)
  process.exit()
}

parseFeed({
  inputStream: process.stdin,
  feedUrl: process.argv[2] || undefined
})
  .then(function (items) {
    return stringify(
      items,
      process.argv.includes('--type=text') ? 'text' : (process.argv.includes('--type=csv') ? 'csv' : (process.argv.includes('--type=xml') ? 'xml' : 'json'))
    )
  })
  .then(function (string) {
    console.log(string)
  })
