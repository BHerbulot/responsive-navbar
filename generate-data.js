const TreeGen = require("tree-json-generator");
const faker = require('faker');
const fs = require('fs');

const config = {
  node: { // Node fields, required
    id: "@id()", // Pipes
    level: "@level()",
    label: faker.commerce.product(),
    url: faker.internet.url(),
    child: "@child()" // Child field pointer (not required, if children are not needed)
  },
  rootNodesNumber: 7, // Number of root nodes
  childNodesNumber: [3, 10], // Number of children nodes (from 2 to 5)
  hasChildRate: 0.3, // Probability of children
  maxLevel: 5 // Max nesting
};
fs.writeFile('fake-data.json', JSON.stringify(TreeGen.generate(config)), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
