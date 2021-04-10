import { EntityRepository, Repository } from "typeorm";
import { User } from "../model/User";

@EntityRepository(User) // declarar que sera repositorio da entidade
class UsersRepository extends Repository<User>{




}
export {UsersRepository}