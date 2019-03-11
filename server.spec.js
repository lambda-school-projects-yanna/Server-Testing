const request = require('supertest');
const server = require('./server');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

describe('server.js', () => {
    it('post route returns a 201 status code', () => {
        const cohort = 'web19'
        return request(server).post('/api/cohorts', cohort)
        .then((res) => {
            const response = res
            expect(response.status).toEqual(201)
        })
    })

    it('delete route returns a 200 status code', () => {
        const cohort = 1;
        return request(server).delete('/api/cohorts/1')
        .then(res => {
            const response = res;
            expect(response.status).toEqual(200)
        })
    })

    it('should return a JSON object fron the index route', async () => {
        const expectedBody = { api: 'running' };
        const response = await request(server).get('/api');
        expect(response.body).toEqual(expectedBody);
    });

});




