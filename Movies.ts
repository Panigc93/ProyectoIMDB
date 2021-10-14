import { Professional } from "./Professional";

export class Movie{

        public title: string;
        public releaseYear: number;
        public actors: Professional[];
        public nacionality: string;
        public director: Professional;
        public writer: Professional;
        public language: string;
        public plataform: string;
        public isMCU: boolean;
        public mainCharacterName: string;
        public producer: string;
        public distributor: string;
        public genre: string;

                constructor(title, releaseYear, nacionality, genre){

                        this.title = title;
                        this.releaseYear = releaseYear;
                        this.actors
                        this.nacionality = nacionality;
                        this.director
                        this.writer
                        this.language
                        this.plataform
                        this.isMCU
                        this.mainCharacterName
                        this.producer
                        this.distributor
                        this.genre = genre;     
                }

        //Metodos

        printMovie(){
                let siMarvel = "No"
                if(this.isMCU == true){
                        siMarvel = "Si"
                }
                let pelicula = ("Los datos de la película son los siguientes:\n" + 
                            "\nTítulo: " +  this.title + "\nAño de estreno: " + this.releaseYear +
                             "\nActores: ");
                             for(let i=0; i<this.actors.length; i++)
                             
                             {pelicula += this.actors[i].name}
                        
                            pelicula += ("\nNacionalidad: " + this.nacionality + "\nDirector: " + this.director.name 
                                        + "\nGuionista: " + this.writer.name + "\nIdioma: " + this.language + "\nPlataforma: " + 
                                        this.plataform + "\nEs de Marvel: " + siMarvel + "\nPersonaje principal: "
                                        + this.mainCharacterName + "\nProductora: " + this.producer + "\nDistribuidora: "
                                        + this.distributor + "\nGénero: " + this.genre)
                return pelicula
        }
}