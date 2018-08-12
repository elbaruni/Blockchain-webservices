# blockchain-webservice
	This is a simple project using webservice to consum private blockchain backend 

## Prerequisites
	-expressjs
	-crypot-js
  -level

## server.js
   this is the starting script to start the server at defined port in the .env file  ,in this project port is 8000
## app.js
  this where handling the midleware for the restful api and route the request to its endpoint

## Routes
  -Block class 
   -it is the template structure for the block
  -Blockchain class
   - this class used to get the blockchain information from leveldb 
   -add Genisis Block "first Block at heigth 0" 
   -methods to add new block,getblock by height, get block height ,validates a block and chain validation
  -Routers 
   - Get route handles get method requests and returns requested blockheight   {"hash":"47b8a9c0d947f255c83f37dfbca715908351e7e1401bb6d8725229355900a922","height":0,"body":"First block in the chain - Genesis block","time":"1534100203","previousBlockHash":""}
   -Post route handles Post method requests and adds new block to the blockchai {"body":"block body contents"}  as body payload in this format  and returns backadded new block in JSON format   {"hash":"47b8a9c0d947f255c83f37dfbca715908351e7e1401bb6d8725229355900a922","height":1,"body":"block body contents","time":"1534100203","previousBlockHash":"ff33a9c0d947f255c83f37aebca715908351e7e1401bb6d872522935590033cd"} 




