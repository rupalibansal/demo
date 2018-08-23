/*let boardID;
let boardName = new Date();
//console.log(boardName);
xdescribe('trello tests', function () {
    it('validate that a board can be created', async function () {

        var response = await chai.request('https://api.ratemyagent.com.au').get(`/Locations/States/Stub-victoria`);
        //console.log(response.body);
    });

    it('create a board', async () => {
        this.timeout(60000);

        var response = await chai.request('https://api.trello.com').post(`/1/boards/?key=${trelloKey}&token=${trelloToken}&name=Cricket${boardName}`);
        //console.log(response.status);
       console.log("this statement is executed");
        //console.log(response.body);
        boardID = response.body.id;

    });

    it('validate that list can be created', async () => {
        this.timeout(60000);
        var response = await chai.request('https://api.trello.com').post(`/1/lists?key=${trelloKey}&token=${trelloToken}&name=Rupali_List&idBoard=${boardID}`);
        console.log(response.status);
    });

});
*/

