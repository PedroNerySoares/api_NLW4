import {Request,Response} from "express"
import { getCustomRepository, getRepository, ReturningStatementNotSupportedError, SimpleConsoleLogger } from "typeorm";
import { User } from "../model/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController{

    async Create(request:Request,response:Response){
        
        const {name,email}=request.body;
        //console.log({email,name})
        const userRepository = getCustomRepository(UsersRepository);
       
        const user = userRepository.create({
            name,   
            email
        });
    
        // >>>>>>>>>>
        //  verifica se o email já esta cadastrado no BD 
        const userAlredyExists = await userRepository.findOne({
            email,
        });
        
        if(userAlredyExists){
            return response.status(400).json({
                error:"User alredy exist"
            })
        }
        //<<<<<<<<

            
        await userRepository.save(user)
        console.log(user) 
        return response.json(user);
       

      // return response.send() 


       /* const {name, email} = request.body;

       const userRepository = getRepository(User)
       
       const user = userRepository.create({
           name,email
       })
       
       await userRepository.save(user);
       return response.json(user) */
    }
    async show(request:Request, response:Response){
       
        const userRepository = getCustomRepository(UsersRepository);
        const all =await userRepository.find();

        response.status(201).json(all)

    }
     
}
export {UserController}