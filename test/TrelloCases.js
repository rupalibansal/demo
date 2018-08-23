// 1. Create a board
// 2. Create a list
// 3. Create a card
// 4. Edit the name of the board
// 5. Edit the list
// 6. Edit the Card
// 7. Delete the board.


// As the the trelloBaseUrl is stored inside the setup folder under the init.json file:

let init = require('../setup/init.json');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let boardName= "TestING_rupaliBansal_Board";

//let baseURL = chai.request(init.trelloBaseUrl)
let expect = chai.expect;
let boardID;
let listID;


describe.only('Trello Test Cases', function() {
    this.timeout(60000);
    //1 Create a BOARD
    xit('Validate that a board can be created', async function () {
       let response = await chai.request(init.trelloBaseUrl).post(`/1/boards/?key=${init.trelloKey}&token=${init.trelloToken}&name=${boardName}`);
       console.log(response.status);
       console.log(response.body);
       boardID=response.body.id;
       console.log(boardID);
        expect(response.status).to.equal(200);
    });
    //2. Create a list in the above board:

    xit('Validate that a list can be created', async function() {
     
        let response= await chai.request(init.trelloBaseUrl).post(`/1/lists?key=${init.trelloKey}&token=${init.trelloToken}&name=TrelloCases&idBoard=${boardID}`);
        console.log(response.body);
        listID=response.body.id;
        console.log(listID);
        expect(response.status).to.equal(200);
    });

    //3. Create a card in the above list:

    xit('Validate that a card can be created', async function() {
        let response = await chai.request(init.trelloBaseUrl).post(`/1/cards?key=${init.trelloKey}&token=${init.trelloToken}&name=Create a board&idList=${listID}`);
        console.log(response.body);
        expect(response.status).to.equal(200);
    });
    
    //4. Edit the name of the board:
    it('Validate that the name of the board can be created', async function() {
        let response = await chai.request(init.trelloBaseUrl).put(`1/boards/5b7e6f0a4bb4c405571630ab`)
        
    });

});