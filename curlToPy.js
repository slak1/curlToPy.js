var curlconverter = require('curlconverter');
var fs = require('fs');
const os = require('os');
//console.log(process.argv);
if (process.argv[2]==undefined) {
    console.log("node curlToPyt2.js CurlFileName WriteFileName"); 
    process.exit();}
if (process.argv[3]==undefined) process.argv[3]=process.argv[2]+".py";

console.log("curl file name = ",process.argv[2])
console.log("write file name.py = ",process.argv[3]) // isn't obligatory

const plik=process.argv[3];
const curlF=process.argv[2];
if (fs.existsSync(curlF)) infile=fs.readFileSync(curlF,"utf8")
else {console.log(curlF+' not exist ');process.exit();}
//console.log(infile);

out=curlconverter.toPython(infile);
console.log(out);
fs.writeFile(plik, out , (err) => {
    if (err) throw err;
    console.log('saved in: '); console.log(__dirname+'\\'+plik)
  });
