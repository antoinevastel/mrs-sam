# Mrs-Sam Headless Crawler

Mrs-Sam is a headless JS Crawler that automatically crawls any website to construction a sitemap.

## Installation

Clone the repository and perform `npm install` in the cloned folder.
If you want to crawl our test server, perform `npm install` in `server/test` as well.

## Usage

    node index.js -max [num] url

* max: the max number of steps performed by the crawler (default is 10)
* url: the url of the website you want to crawl (ex: http://localhost:8080)

## Result

A graph of the website can be observed (http://localhost:8080/map.html) by running the test server !


