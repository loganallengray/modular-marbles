const { createMarble } = require("./marbleMaker.js")
const { weaveBag } = require("./bagMaker.js")

const silkBag = weaveBag("silk")
const leatherBag = weaveBag("leather")
const fabricBag = weaveBag("fabric")
console.log(silkBag);
console.log(leatherBag);
console.log(fabricBag);

const smallMarble = createMarble("small")
const mediumMarble = createMarble("medium")
const bigMarble = createMarble("big")
console.log(smallMarble);
console.log(mediumMarble);
console.log(bigMarble);