const functions = require('firebase-functions');
const polka = require('polka');
const app = polka();

function one(req, res, next) {
  req.hello = 'world';
  next();
}

function two(req, res, next) {
  req.foo = '...needs better demo 😔';
  next();
}

app.get('/', (req, res) => {
  res.end('Hello world!');
});

exports.app_config2 = functions.https.onRequest(app);

// exports.app_config2 = functions.https.onRequest((req, res) => {
//     polka()
//         .use(one, two)
//         .get('/', (req, res) => {
//             console.log(`~> Hello, ${req.hello}`);
//             res.end(`User: ${req.params.id}`);
//         })
//         .listen(3000, err => {
//             if (err) throw err;
//             console.log(`> Running webserver...`);
//         });
// });

// exports.app_config = functions.https.onRequest((request, response) => {
//     req = http.request({
//         host: '',
//         port: 80,
//         path: '',
//         method: 'GET',
//         agent: agent,
//     }, res => {
//         let rawData = '';
//         res.setEncoding('utf8');
//         res.on('data', chunk => { rawData += chunk; });
//         res.on('end', () => {
//             response.status(200).send(`Data: ${rawData}`);
//         });
//     });
//     req.on('error', e => {
//         response.status(500).send(`Error: ${e.message}`);
//     });
//     req.end();
// });


// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
