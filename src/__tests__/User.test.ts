import request from 'supertest';
import { app } from '../app';

import createConnection from '../database'

describe("/Users", ()=>{
    beforeAll(async()=>{
        const connection = await createConnection();
        await connection.runMigrations();
        console.log("teste passou aqui444")
    })
    
    it("Should be able to create a new user",async() =>{
        const response = await request(app).post("/user").send({

            name:"UserExample2",
            email:"examplename2@gmail.com"
            
        })

        expect(response.status).toBe(201)
    })
})

