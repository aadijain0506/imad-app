var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = { 
    'article-one': {
        title: 'Article One | Aadi Jain',
        heading: 'Article One',
        date: 'August 22, 2017',
        content: `<p>
                        Hello everyone this is the content of my first article.
                        Hello everyone this is the content of my first article.
                        Hello everyone this is the content of my first article.
                    </p>
                    <p>
                        Hello everyone this is the content of my first article.
                        Hello everyone this is the content of my first article.
                        Hello everyone this is the content of my first article.
                    </p>
                    <p>
                        Hello everyone this is the content of my first article.
                        Hello everyone this is the content of my first article.
                        Hello everyone this is the content of my first article.
                    </p>`
    },
    'articletwo': {
        title: 'Article Two | Aadi Jain',
        heading: 'Article Two',
        date: 'August 22, 2017',
        content: `<p>
                        Hello everyone this is the content of my second article.
                        Hello everyone this is the content of my second article.
                        Hello everyone this is the content of my second article.
                    </p>
                    <p>
                        Hello everyone this is the content of my second article.
                        Hello everyone this is the content of my secondarticle.
                        Hello everyone this is the content of my second article.
                    </p>
                    <p>
                        Hello everyone this is the content of my second article.
                        Hello everyone this is the content of my second article.
                        Hello everyone this is the content of my second article.
                    </p>`},
    'articlethree': {
        title: 'Article Three | Aadi Jain',
        heading: 'Article Three',
        date: 'August 22, 2017',
        content: `<p>
                        Hello everyone this is the content of my third article.
                        Hello everyone this is the content of my third article.
                        Hello everyone this is the content of my third article.
                    </p>
                    <p>
                        Hello everyone this is the content of my third article.
                        Hello everyone this is the content of my third article.
                        Hello everyone this is the content of my third article.
                    </p>
                    <p>
                        Hello everyone this is the content of my third article.
                        Hello everyone this is the content of my third article.
                        Hello everyone this is the content of my third article.
                    </p>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>    
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(Articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
