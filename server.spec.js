const request = require('supertest');
const server = require('./server');


describe('server.js', () => {
    it('post route returns a 201 status code', () => {
        const expectedStatus = 201;
        const cohort = 'web19'
        return request(server).post('/api/cohorts', cohort)
        .then((res) => {
            const response = res
            expect(response.status).toEqual(expectedStatus)
        });
    });

    it('delete route returns a 200 status code', () => {
        const expectedStatus = 200;
        const cohort = 1;
        return request(server).delete('/api/cohorts/1')
        .then(res => {
            const response = res;
            expect(response.status).toEqual(expectedStatus)
        });
    });

        







});



