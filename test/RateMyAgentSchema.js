// Test Cases to be defined:
// 1. Validate that a User Can Login:
// 2. Get the Location ID for the Location Victoria
// 3. Get the first Agent on the List 
// 4. Shortlist the Agent
// 5. Print the list of ShortList agents:
// 6. Delete the ShortList Agent.

let chai = require('chai');
let chaiHttp = require('chai-http');
let locationID, agentCode;
chai.use(chaiHttp);

// As the BaseUrl is stored inside the init.json file 
let init = require('../setup/init.json');

// As the schema is saved under the schema folder
let schema = require('../schema/agentSchema.json');

// we want to get the cookies saved for that we need to use the agent :
let rateMyAgentUrl = chai.request.agent(init.baseURL);

describe('Validate the Rate My agent Test Cases', () => {

// User Login:    
it('Validate that a user can login', async function () {

    let body = {
        "email": "r.rupali211@gmail.com",
        "password": "Hello123"
    };
    let response = await rateMyAgentUrl.post(`/Account/Login`).send(body);
    chai.expect(response.status).to.equal(200);


});

// Location Id:

it('Validate that the location Id is for Victoria', async function () {
    let response = await rateMyAgentUrl.get(`/Locations/States/Stub-victoria`);
    locationID = response.body.LocationId;
    //console.log(locationID);
    chai.expect(locationID).to.equal(7);


});

// 3. Get the first Agent on the List 

it('Validate that the Agent code is fetched', async function () {
    let response = await rateMyAgentUrl.get(`/Sales/Locations/States/${locationID}/Agents?StatisticType=TotalRecommendations&skip=0&take=10`)
    agentCode = response.body.Results[0].AgentCode;
    chai.expect(response.status).to.equal(200);
    //console.log(response.body);

});

// Shortlist the agent:
it('Validate that the selected User has been shortlisted', async function () {
    let response = await rateMyAgentUrl.put(`/Users/Me/Shortlist/Agents/Code-${agentCode}`);
    chai.expect(response.status).to.equal(200);
});

// Get the list of the shortlisted agents:
it('Validate the list of shortlisted Agents', async function () {
    let response = await rateMyAgentUrl.get(`/Agents/Code-bx937`);
    console.log(response.body);
    chai.expect(response.body).to.be.jsonSchema(schema);
});

});