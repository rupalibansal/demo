/*let init = require('../setup/init.json');
let boardName = new Date();
let boardID;
let idList;

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
let trelloBaseURL = chai.request.agent(init.baseURL);
var expect = chai.expect;

describe('Trello Test Cases', function () {
    this.timeout(60000);
    xit('create a board', async () => {
        this.timeout(60000);
        var response = await chai.request(init.baseURL).post(`/1/boards/?key=${init.trelloKey}&token=${init.trelloToken}&name=Invitation${boardName}`);
        console.log(response.status);
        //console.log(response.body);
        boardID = response.body.id;
    });
    xit('Create a list', async function () {
        this.timeout(60000);
        var response = await chai.request(init.baseURL).post(`/1/lists?key=${trelloKey}&token=${trelloToken}&name=Guest_List&idBoard=${boardID}`);
        console.log(response.status);
        //console.log(response.body);
        idList = response.body.id;
        console.log(idList);


    });
    xit('Create a card', async function () {
        this.timeout(60000);
        var response = await chai.request(init.baseURL).post(`/1/cards?key=${trelloKey}&token=${trelloToken}&idList=${idList}&name=Dhrisha`);
        console.log(response.status);
    });

    it.only('validate that user can login', async function () {
        let body = {
            "email": "r.rupali211@gmail.com",
            "password": "Hello123"
        };
        var response = await trelloBaseURL.post(`/Account/Login`).send(body);
        console.log(response.status);
        expect(response.status).to.equal(200);
        //console.log(response.body);
    });

    it('shortlist candidate',async () => {
        var response = await trelloBaseURL.put('/Users/Me/Shortlist/Agents/Code-bx937');
        console.log(response.status);
        //console.log(response.body);
    });
});*/