import { Professional } from "./Professional";
import { Movie } from './Movies';
import * as fs from "fs";

export class IMDB{

        public peliculas: Movie[]
                constructor(peliculas: Movie[]){
                        this.peliculas = peliculas;
                }

        //Metodos
        escribirEnFicheroJSON(nombreFichero: string) {
               fs.writeFileSync(nombreFichero, JSON.stringify(this))

        }


        obtenerlnstancialMDB(nombreFichero:string):IMDB 
        {       let entrada= fs.readFileSync(nombreFichero, 'utf8');
        console.log(entrada);
                let carteleraVer:IMDB = JSON.parse(entrada)
                console.log(carteleraVer);
                
                console.log(typeof(carteleraVer))
                return carteleraVer
        }
}