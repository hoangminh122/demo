var fs=require('fs')

fs.appendFile('data.txt','Hello world !',function(error){
if(error) throw error;
console.log('Save');
});