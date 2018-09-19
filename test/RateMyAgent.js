// Test Cases to be defined:
// 1. Validate that a User Can Login:
// 2. Get the Location ID for the Location Victoria
// 3. Get the first Agent on the List 
// 4. Shortlist the Agent
// 5. Print the list of ShortList agents:
// 6. Delete the ShortList Agent.

// As the BaseUrl is stored in the setup folder inside the init.json file.
/*let init = require('../setup/init.json');
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let expect = chai.expect;

let locationId, agentCode;

//We want our cookies to get Saved 
let rateMyAgentUrl = chai.request.agent(init.baseURL);
describe('Rate My Agent Test Cases', () => {
    //Test Case 1
    let response;
    it('Validate that if a User Can Login In', async function () {

        let body = {
            "email": "r.rupali211@gmail.com",
            "password": "Hello123"
        };
        response = await rateMyAgentUrl.post(`/Account/Login`).send(body);
        //console.log(response.status);
        // How to Use the chai assertions:
        expect(response.status).to.equal(200);
    });
    // get the Location ID for Victoria:
    it('Print the Location Id for Victoria ', async function () {
        response = await rateMyAgentUrl.get(`/Leasing/Locations/States/Stub-victoria`);
        locationId = response.body.LocationId;
        expect(response.status).to.equal(200);
        //console.log(response.body.LocationId);
    });
    // Get the Agent Code 
    it('Print the Code of the Agent ', async function () {
        response = await rateMyAgentUrl.get(`/Sales/Locations/States/${locationId}/Agents?StatisticType=TotalRecommendations&skip=0&take=3`);
        agentCode = response.body.Results[0].AgentCode;
        expect(response.status).to.equal(200);

        //console.log(agentCode);
    });

    // ShortList The Agent :
    it('Shortlist the Selected candidate', async function () {
        response = await rateMyAgentUrl.put(`/Users/Me/Shortlist/Agents/Code-${agentCode}`);
        //console.log(response.body);
        expect(response.status).to.equal(200);

    });

    // Print the List of ShortList Agents:
    it('Print the List of the Shortlist Agents', async function () {
        response = await rateMyAgentUrl.get(`/Users/Me/Shortlist/Agents?skip=0&take=9`);
        //console.log(response.body);
        expect(response.status).to.equal(200);

    });

    it('Delete the shortlisted Agent ', async function () {
        response = await rateMyAgentUrl.delete(`/Users/Me/Shortlist/Agents/Code-${agentCode}`);
        //console.log(response.body);
        expect(response.status).to.equal(200);

    });

    it('Print the List of the Shortlist Agents', async function () {
        response = await rateMyAgentUrl.get(`/Users/Me/Shortlist/Agents?skip=0&take=9`);
        // console.log(response.body);
        expect(response.status).to.equal(200);

    });

});*/