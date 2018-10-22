# curlToPy.js
Soft utility to change Curl commands to Python commands 
for exemple to use in Python Requests 

Usage:

     node curlToPy.js CurlFileName WriteFileName  
            or
     node curlToPy.js CurlFileName
     
(CurlFileName)    it's a curl's commands copied for exemple from chrome debugger and writted on the same folder as curlToPy.js

(WriteFileName)   it's a file name of converted file to Python code. (not obligatory)

curlToPy.js of course depends from : node.js ,  
      and        curlconverter  --> to install -->  npm install --save curlconverter
          
Based on    NickCarneiro/curlconverter      
             
             
