const fs = require('fs');
const path = require('path');
// make directory

//fs.mkdir(path.join(__dirname,'/text'),{} err=> {
//    if (err) throw err;
//    console.log('fodler created...')
//})

//write file

//fs.writeFile(path.join(__dirname,'/text', 'hello.txt'),'Hello world', err=> {
  //  if (err) throw err;
    //console.log('File created...'); 

//Append file    
    //fs.appendFile(path.join(__dirname,'/text','hello.txt'), 'I love Node.js', err=> {
     //   if(err) throw err;
       // console.log('file created')
    //});
//});

//read file

//fs.readFile(path.join(__dirname,'/text','hello.txt'),'utf8', (err,data)=> {
  //  if(err) throw err;
    //console.log(data);
//});

// rename a file

fs.rename(path.join(__dirname,'/text','hello.txt'),(path.join(__dirname,'/text','helloworld.txt')), err=> {
    if (err) throw err;
    console.log('file renamed...')
})