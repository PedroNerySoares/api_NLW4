
import request from 'supertest';
import { app } from '../app';

import createConnection from '../database/index'


describe("/users",async ()=>{
    beforeAll(async()=>{
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user",async()=>{
        const response = await request(app).post("/users").send({
            email:"examplename@gmail.com",
            name:"UserExample"
        })
        expect(response.status).toBe(201)
    })
})
    
