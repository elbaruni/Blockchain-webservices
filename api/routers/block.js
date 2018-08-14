//RESTful APIs   Frameworks
const express = require('express');
// Router to handle endpoints
const router = express.Router();

const Private_BlockChain = require('../classes/private-blockchain');

 //post request to add new Block to the Blockchain
router.post('/', async (req, res, next) => {


    try {
        let chain = new Private_BlockChain.Blockchain();
        let block = await chain.addBlock(new Private_BlockChain.Block(req.body.body));

        console.log(JSON.parse(block));
        res.status(201).json(JSON.parse(block));
    }
    catch (err) { console.log(err); }
});

router.get('/:BlockHeight', async (req, res, next) => {
    const blockHeight = req.params.BlockHeight;
    let chain = new Private_BlockChain.Blockchain();
    let block = await chain.getBlock(blockHeight);
    console.log(block);
    res.status(200).json(block);
      
});




module.exports = router;