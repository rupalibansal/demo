// Create a board.
// Create a list .
// Create a card.
// Get all the boards linked with the board.
// Edit the name of the board.
// delete the board.


//the base Url is stored in the setUp folder ->init.json file.

/*let init = require('../setup/init.json');
let chai = require('chai');
let chaiHttp = require('chai-http');
let boardName = 'API_TEST_BOARD4';
chai.use(chaiHttp);
let boardID;


// TestCase 1 : Create a Board:

describe('Trello Test Cases', () => {
    it('Validate that a board can be created', async function () {
        this.timeout(60000);
        let response = await chai.request(init.trelloBaseUrl).post(`/1/boards/?key=${init.trelloKey}&token=${init.trelloToken}&name=${boardName}`);
        console.log(response.status);
        chai.expect(response.status).to.equal(200);
        boardID = response.body.id;
        console.log(boardID);
    });
    
    it('Validate that a list can be created', async function()  {
        console.log(boardID);
      let response = await chai.request(init.trelloBaseUrl).post(`/1/lists?key=${init.trelloKey}&token=${init.trelloToken}&name=Dhrisha_BirthDay&idBoard=${boardID}`);
      console.log(response.body);
    });
});*/