// Assignments #1 - Create a cli
// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.
// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file


// const fs = require('fs');

// function countWords(fileName){
//     fs.readFile(fileName,'utf-8',function(err,data){
//         let words = 0;
//         for(let i=0;i<data.length;i++){
//             if(data[i] === " "){
//                 words++;
//             }
//         }
//         console.log(words+1);
//     })
// }

// countWords(process.argv[2]); // node index2.js a.txt






const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_sentences')
  .description('Countthe number the number of lines in a file')
  .argument('<file>','file to count the number of lines')
  .action((file) => {
    fs.readFile(file,'utf-8',function(err,data){
        if(err){
            console.log(err);
        }
        else{
            const lines = data.split('\n').length;
            console.log(`There are ${lines} lines in ${file}`);
        }
    })
  })


program.command('count_words')
  .description('Countthe number the number of words in a file')
  .argument('<file>','file to count the number of words')
  .action((file) => {
    fs.readFile(file,'utf-8',function(err,data){
        if(err){
            console.log(err);
        }
        else{
            const words = data.split(' ').length;
            console.log(`There are ${words} words in ${file}`);
        }
    })
  })

program.parse();