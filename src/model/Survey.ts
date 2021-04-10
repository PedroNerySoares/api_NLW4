import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("surveys")// entity é o nome da tabela
 class Survey{
     
     @PrimaryColumn()
     readonly id:string; //readonly usar para apenas ler, não permitindo alteração
     
     @Column()
     title:string;
     
     @Column()
     description:string;
 
     @Column()
     @CreateDateColumn()
     created_at:Date;
 
     constructor(){
         if(!this.id){
             this.id=uuid();
         }
     }
     
 }
 export {Survey}