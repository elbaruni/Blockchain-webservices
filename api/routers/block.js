//RESTful APIs   Frameworks
const express = require('express');
// Router to handle endpoints
const router = express.Router();

//constant object to handle Block and BlockChain classes
const Private_BlockChain = require('../classes/private-blockchain');

 //post request to add new Block to the Blockchain
router.post('/', async (req, res, next) => {


    try {
//first we create an instance of blockchain class
        let chain = new Private_BlockChain.Blockchain();
//calling addblock method of blockchain and gets the returned new added block into block object
        let block = await chain.addBlock(new Private_BlockChain.Block(req.body.body));

        console.log(JSON.parse(block));
//post request response with new added block in json format
        res.status(201).json(JSON.parse(block));
    }
//to handle any eerors
    catch (err) { console.log(err); }
});
Get request returns Block of blockheight passed as parameter

router.get('/:BlockHeight', async (req, res, next) => {
try{
// extracts blockheight from request parameters
    const blockHeight = req.params.BlockHeight;
//first we create an instance of blockchain class
    let chain = new Private_BlockChain.Blockchain();
//calling getBlockmethod of blockchain and gets the block  of blockheight
    let block = await chain.getBlock(blockHeight);
    console.log(block);
    res.status(200).json(block);
      
}
catch(err) { console.log(err); }
});




module.exports = router;