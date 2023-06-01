const express = require('express');
const verifyProof = require('../utils/verifyProof');
const MerkleTree = require('../utils/MerkleTree');

const port = 1225;

const app = express();
app.use(express.json());

// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = '';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  const { name, proof, root } = body

  this.MERKLE_ROOT = root;

  // TODO: prove that a name is in the list 
  const isInTheList = verifyProof(proof, name, this.MERKLE_ROOT);

  if (isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
