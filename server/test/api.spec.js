const request = require('supertest');
// import server
const server = require('../app');

describe('API server', () => {
    let api;
    let testFood = {
        name: 'food',
        ingredients: ['food1', 'food2']
    };

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /foods with status 200', (done) => {
        request(api).get('/foods').expect(200, done);
    });

    it('retrieves a food by name', (done) => {
        request(api)
            .get('/foods/taco')
            .expect(200)
            .expect({name: "taco", ingredients: ['shell', 'lettuce', 'beans', 'salsa', 'peppers']}, done);
    });

    it('responds to a unknown food name with a 404', (done) => {
        request(api).get('/foods/emily').expect(404).expect({}, done);
    });
})