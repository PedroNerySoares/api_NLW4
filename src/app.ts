import 'reflect-metadata'
import express from 'express'
import createConnection from './database/index'
import { router } from './router';

console.log("estou aqui")
createConnection()
const app = express();

app.use(express.json());// aplicação usar formato json, se caso não definir aplicação ficar undefined
app.use(router); // aplicação fará com que use a rota 

export{app}



/**
 * GET => BUSCAR INFORMAÇÃO
 * POST => SALVAR INFORMAÇÃO
 * PUT => ALTERAR INFORMAÇÃO
 * DELETE => DELETAR INFORMAÇÃO
 * PATCH => ALTERÃÇÃO ESPECIFICA 

//http://localhost:3333/users

app.get("/",(request,response)=>{

    return response.send("Hello Word!!")
    //return response.json({message:"hello modafocar"})
})

// 1 param => Rota(Recurso,API))
// 2 param => Request,Response
app.post("/",( request,response)=>{
    //recebeu dados para salvar

    return response.json({message:"Dados salvos com Sucesso"})
})
 */
