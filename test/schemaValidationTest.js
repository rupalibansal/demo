
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(require('chai-json-schema'));
//require('../schema/fruitSchema.json');


//variable1 goodApple which is a json OBJECT:
var goodApple = {
    skin: 'thin',
    colors: ['red', 'blue', 'yellow'],
    taste: 6
};

// variable2 badApple which is a json OBJECT
var badApple = {
    colors: ['brown'],
    taste: 0,
    worms: 2
};





describe('Validate the schema cases', () => {
    it('validate', async function()  {
        chai.expect(goodApple).to.be.jsonSchema(require('../schema/fruitSchema.json'));
    });
});
