const cheerio = require('cheerio')
const rp = require('request-promise');
/*
// async fuction parse() => {
//     const getHTML = async (url) => {
//         const {data} = await axious.get(url);
//         return cheerio.load(data);
//     };
//     const $ = await getHTML('https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States');
//     console.log($.text());
// };
// parse();

const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
rp(url)
  .then(function(html){
    //console.log(html);
    const $ = cheerio.load(html);

    $('td > b').each(function(i, elem) {
      let x = $(this).text();
      console.log(x);
    });
    $('td > span').each(function(i, elem) {
        let x = $(this).text();
        console.log(x);
      });
  })
  .catch(function(err){
      console.log(err);
      console.log('1')
    //handle error
  });

*/


let intput = '<p>kairat</p> <p>beka</p>';
const $ = cheerio.load(intput);
// outout ['kairat', 'beka']

function myFilter(arg) {
    let a = [];
    a.push(arg);
    return a.split(' ');
}

let res = myFilter(input);
console.log(res);
