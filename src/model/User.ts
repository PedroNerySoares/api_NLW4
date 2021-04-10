import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'
/**
 * pagina model, utlizada para 
 * pois ORM usa uma classe para gerar uma tabela 
 */
@Entity("users")
class User{
    
    @PrimaryColumn()
    readonly id:string; //readonly usar para apenas ler, não permitindo alteração
    
    @Column()
    name:string;
    
    @Column()
    email:string;

    @Column()
    @CreateDateColumn()
    created_at:Date;

    constructor(){
        if(!this.id){
            this.id=uuid();
        }
    }
    
}


export{User}