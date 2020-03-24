var FeedParser = require('feedparser')

module.exports = function (parameters) {
  return new Promise(function (resolve, reject) {
    var items = []
    var feedparser = new FeedParser({
      feedurl: parameters.feedUrl
    })
    feedparser.on('error', reject)
    parameters.inputStream.pipe(feedparser)
    feedparser.on('readable', function () {
      return items.push(feedparser.read())
    })
    feedparser.on('end', function () {
      resolve(items.filter(Boolean))
    })
  })
}
