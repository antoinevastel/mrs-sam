var  argv  =  require('yargs')
    .usage('$0 index.js --options=[string] --url=[string] --out=[string]').argv;

var fs = require('fs');
var optionFileName = argv.options || "options.json";
var options = JSON.parse(fs.readFileSync(optionFileName, 'utf8'));

var url = argv.url || 'http://localhost:8080';
var out = argv.out || url.slice(7, url.length).replace('.', '_').replace(':', '_') + "_" + options.crawler.time;

//Import of other modules (this should be improved somehow)
var Crawler = require('./crawler.js').Crawler;

var crawler = new Crawler(url, options);
crawler.start(err, success);


function err(msg) {
    console.log(msg);
}

function success(result) {
    saveExecutedScenario(result.executedScenario);
    if (options.map.active) saveSiteMap(result.siteMap);
}

function saveExecutedScenario(executed) {
    var fs = require('fs');
    fs.writeFileSync(`./test/server/${out}_scenar.js`, JSON.stringify(executed));

}

function saveSiteMap(map) {
    var fs = require('fs');
    fs.writeFileSync(`./test/server/${out}_map.js`, map.generateVisScript());
}



/*crawlMap(map, function(err, succ) {

    console.log('crawling is done');
    var fs = require('fs');
    fs.writeFileSync(`./test/server/${out}_map.js`, map.generateVisScript());

    var util = require('util');
    fs.writeFileSync(`./test/server/${out}_scenar.js`, JSON.stringify(map.scenarioManager.executed));

    if (options.diff.active) {
        computeDiff(map);
        console.log('diff is done');

        fs.writeFileSync(`./test/server/${out}_diff.js`, map.generateVisScript());
    }
});


function computeDiff(map) {
    var jsdiff = require('diff');

    map.links.forEach(l => {
        l.diff = jsdiff.diffLines(l.from.hash, l.to.hash);
        console.log('a diff is done');
        //l.diff = jsdiff.diffWordsWithSpace(l.from.hash, l.to.hash);		
    })
}
*/