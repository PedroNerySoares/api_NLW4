import { EntityRepository, Repository } from "typeorm";
import{Survey} from "../model/Survey"

@EntityRepository(Survey) // declarar que sera repositorio da entidade
class SurveyRepository extends Repository<Survey>{




}
export {SurveyRepository}