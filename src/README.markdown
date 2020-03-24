# convertfeed

convert RSS, Atom or RDF feed to JSON, CSV or XML

* requires at least Node.js 10.0.0
* reads the downloaded feed from standard input
* writes converted items to standard output

## Installation

* install [Node.js](https://nodejs.org/)
* run `npm install -g convertfeed`

## Usage

```
Usage: convertfeed [Feed URL] [--type=Type]

Type - defaults to json, but can also be xml or csv
Feed URL - needed if you want to resolve relative URLs in your feed
```

For example:

```
jakutis@laptop:~/Desktop$ curl https://nodejs.org/en/feed/blog.xml | convertfeed --type=csv
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  569k    0  569k    0     0   581k      0 --:--:-- --:--:-- --:--:--  580k
created,url,title,author,updated
1583985496,https://nodejs.org/en/blog/release/v13.11.0,Node v13.11.0 (Current),Myles Borins,1583985496
1583372451,https://nodejs.org/en/blog/release/v13.10.1,Node v13.10.1 (Current),Myles Borins,1583372451
1583344534,https://nodejs.org/en/blog/release/v13.10.0,Node v13.10.0 (Current),Shelley Vohr,1583344534
1582059492,https://nodejs.org/en/blog/release/v13.9.0,Node v13.9.0 (Current),Shelley Vohr,1582059492
1582056389,https://nodejs.org/en/blog/release/v12.16.1,Node v12.16.1 (LTS),Myles Borins,1582056389
1581446104,https://nodejs.org/en/blog/release/v12.16.0,Node v12.16.0 (LTS),Michaël Zasso,1581446104
1580990400,https://nodejs.org/en/blog/vulnerability/february-2020-security-releases,February 2020 Security Releases,Sam Roberts,1580990400
1580989092,https://nodejs.org/en/blog/release/v13.8.0,Node v13.8.0 (Current),Bethany Nicolle Griggs,1580989092
1580958785,https://nodejs.org/en/blog/release/v12.15.0,Node v12.15.0 (LTS),Bethany Nicolle Griggs,1580958785
1580958678,https://nodejs.org/en/blog/release/v10.19.0,Node v10.19.0 (LTS),Bethany Nicolle Griggs,1580958678
1579632193,https://nodejs.org/en/blog/release/v13.7.0,Node v13.7.0 (Current),Shelley Vohr,1579632193
1578607028,https://nodejs.org/en/blog/release/v10.18.1,Node v10.18.1 (LTS),Bethany Nicolle Griggs,1578607028
1578439147,https://nodejs.org/en/blog/release/v13.6.0,Node v13.6.0 (Current),Ruben Bridgewater,1578439147
1578418680,https://nodejs.org/en/blog/release/v12.14.1,Node v12.14.1 (LTS),Bethany Nicolle Griggs,1578418680
1576695142,https://nodejs.org/en/blog/release/v13.5.0,Node v13.5.0 (Current),Myles Borins,1576695142
1576628580,https://nodejs.org/en/blog/vulnerability/december-2019-security-releases,December 2019 Security Releases,"Michael Dawson, Sam Roberts",1576628580
1576622215,https://nodejs.org/en/blog/release/v13.4.0,Node v13.4.0 (Current),Myles Borins,1576622215
1576622212,https://nodejs.org/en/blog/release/v12.14.0,Node v12.14.0 (LTS),Myles Borins,1576622212
1576622201,https://nodejs.org/en/blog/release/v10.18.0,Node v10.18.0 (LTS),Myles Borins,1576622201
1576622192,https://nodejs.org/en/blog/release/v8.17.0,Node v8.17.0 (LTS),Myles Borins,1576622192
```

## License

(The MIT License)

Copyright (c) 2020-2020 Vytautas Jakutis <vytautas@jakut.is> (https://jakut.is/)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
