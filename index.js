// const cheerio = require('cheerio')
// const rp = require('request-promise');
// /*
// async fuction parse() => {
//     const getHTML = async (url) => {
//         const {data} = await axious.get(url);
//         return cheerio.load(data);
//     };
//     const $ = await getHTML('https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States');
//     console.log($.text());
// };
// parse();

// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
// rp(url)
//   .then(function(html){
//     //console.log(html);
//     const $ = cheerio.load(html);

//     $('td > b').each(function(i, elem) {
//       let x = $(this).text();
//       console.log(x);
//     });
//     $('td > span').each(function(i, elem) {
//         let x = $(this).text();
//         console.log(x);
//       });
//   })
//   .catch(function(err){
//       console.log(err);
//       console.log('1')
//     //handle error
//   });

// */




// outout ['kairat', 'beka']

// function myFilter(arg) {
//     let a = [];
//     const $ = cheerio.load(arg);
    
//     a.push($.text());
    
//     return a.join().split(' ');
// }


// console.log(myFilter('<p>kairat</p> <p>beka</p>'));
// const fs = require('fs')
const path = require('path')
// const EventEmitter = require('events')

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw new Error(err);
// })

// fs.writeFile(path.join(__dirname, 'notes', 'suka.txt'), 
//   'Сегодня 25 апреля, 5 часов вечера. Сижу в стори изучаю модули node.js', (err) => {
//     if (err) throw err
//     console.log('файл был создан')
//     fs.appendFile(path.join(__dirname, 'notes', 'suka.txt'), 
//       'from append file bla', (err) => {
//         if (err) throw err
//         console.log('файл был изменен')
//         fs.readFile(
//           path.join(__dirname, 'notes', 'suka.txt'),'utf-8',
//           (err, data) => {
//             if (err) throw err
//             console.log(data)
//           } 
//         )
//       }
//     )
//   }  
// )

// fs.rename(path.join(__dirname, 'notes', 'suka.txt'), path.join(__dirname, 'notes', 'temir.txt'), (err) => {
//   if (err) {
//     throw err
//   }
// }
// )

const http = require('http')

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(`
      <h1>Form</h1>
      <form method="post" action="/">
        <input name="title" type="text"/>
        <button type="submit">Send</button>
      </form>
  `)
} else if (req.method === 'POST') {
  const body = []
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  })
  
  
  req.on('data', data => {
    body.push(Buffer.from(data))
  })
  req.on('end', () => {
    const message = body.toString().split('=')[1];
    
  
  
  res.end(`
    <h1>Ваше сообщение: ${message}</h1>
  `);
  })
  
}
})

server.listen(3000, () => {
  console.log('server is running')
});