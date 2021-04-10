import { request, Request, response } from 'express';
import {Router} from 'express';
import { SurveyController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router=Router();
const userController= new UserController();
const surveyController = new SurveyController();


router.get("/useruser",userController.show)
router.post("/user",userController.Create)

router.get("/showsurveys",surveyController.show)
router.post("/surveys",surveyController.Create)


export{router}