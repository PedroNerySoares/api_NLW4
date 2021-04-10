import { getCustomRepository } from 'typeorm';
import {Request,Response} from "express"
import { SurveyRepository } from '../repositories/SurveyRepository';


class SurveyController{

    async Create(request:Request,response:Response){
        
        const {title,description}=request.body;
         
        const surveyRepository = getCustomRepository(SurveyRepository);

        const survey = surveyRepository.create({
            title,
            description
        });

        console.log(survey);
        await surveyRepository.save(survey)
        return response.status(201).json(survey)
 
    }
    async show(request:Request,response:Response){
        const surveyRepository = getCustomRepository(SurveyRepository);
        const all  = await surveyRepository.find();
        return response.json(all)      
    }
     
}
export {SurveyController}