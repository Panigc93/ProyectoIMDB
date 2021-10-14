import { Professional } from "./Professional";
import { Movie } from './Movies';

export class IMDB{

        public peliculas: Movie[]
                constructor(peliculas: Movie[]){
                        this.peliculas = peliculas;
                }
}