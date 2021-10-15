import { Professional } from './Professional';
import { Movie } from "./Movies";
import { IMDB } from "./IMDB";
import * as fs from "fs";


let persona1 = new Professional("Peter Martín", 22, "Masculino", 78, 1.81, "Rubio", "Azules", "Blanca", false, "Inglesa",0,"Actor")
let persona2 = new Professional("Lucía López", 44, "Femenino", 66, 1.59, "Negro", "Azules", "Blanca", false, "Española",1,"Actriz")
let persona3 = new Professional("John Sean", 67, "Masculino", 88, 1.89, "Cataño", "Marrones", "Negra", true, "Estadounidense",3,"Director")
let persona4 = new Professional("Safir Impala", 38, "Masculino", 73, 1.75, "Negro", "Negros", "Asiática", false, "Indio",0,"Guionista")

let actores = [persona1,persona2]

let pelicula1 = new Movie("La casa del terror", 2014, "Italiana", "terror")

pelicula1.actors= actores
pelicula1.director = persona3
pelicula1.writer = persona4
pelicula1.language = "italiano" 
pelicula1.plataform = "Netflix"
pelicula1.isMCU = false
pelicula1.mainCharacterName = "Rigoberto el Tuerto"
pelicula1.producer = "Warner"
pelicula1.distributor = "Netflix"

let persona5 = new Professional("Manuel Jamón", 52, "Masculino", 79, 1.74, "Castaño", "Azules", "Blanca", true, "Francesa",0,"Actor")
let persona6 = new Professional("Fillipo Sorrento", 49, "Masculino", 86, 1.90, "Rubio", "Verdes", "Negra", false, "Italiana",1,"Actriz")
let persona7 = new Professional("Mick Jagger", 80, "Masculino", 80, 1.89, "Azul", "Verdes", "Negra", true, "Albana",3,"Director")
let persona8 = new Professional("Pana Rabbit", 33, "Femenino", 77, 1.75, "Negro", "Azules", "Inuit", false, "Española",0,"Guionista")

let actores2 = [persona5,persona6]

let pelicula2 = new Movie("Hola Juan Carlos", 2021, "Española", "comedia")

pelicula2.actors= actores2
pelicula2.director = persona7
pelicula2.writer = persona8
pelicula2.language = "Español" 
pelicula2.plataform = "HBO"
pelicula2.isMCU = false
pelicula2.mainCharacterName = "Juan Carlos"
pelicula2.producer = "Lions Gate"
pelicula2.distributor = "HBO"

let peliculas = [pelicula1,pelicula2]

let cartelera = new IMDB(peliculas)

// console.log(cartelera)


fs.writeFileSync("imdbBBDD.json", JSON.stringify(cartelera))

