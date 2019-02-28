//  const path = require('path')
// const fs = require('fs');

// let messages_path = path.join(__dirname, `/messages`, `/welcome.text`);
// console.log(messages_path);

// console.log(typeof messages_path);
// fs.readFile(messages_path , 'utf8' ,(err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

let ng6 = require(`./platforms/nodejs`)

ng6.ndjs.angular(`prince`)

