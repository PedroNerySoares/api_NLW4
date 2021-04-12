import 'reflect-metadata'
import { app } from "./app";
/**
 * propriedades do APP foi desmenbrado para
 * quando for usar testes, não precisar executar 
 * a app
 */

app.listen(3333,()=> console.log("Server is running!"));
