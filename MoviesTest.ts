import { Professional } from "./Professional";
import { Movie } from './Movies';

let persona1 = new Professional("Peter Martín", 22, "Masculino", 78, 1.81, "Rubio", "Azules", "Blanca", false, "Inglesa",0,"Actor")
let persona2 = new Professional("Lucía López", 44, "Femenino", 66, 1.59, "Negro", "Azules", "Blanca", false, "Española",1,"Actriz")
let persona3 = new Professional("John Sean", 67, "Masculino", 88, 1.89, "Castaño", "Marrones", "Negra", true, "Estadounidense",3,"Director")
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

console.log(pelicula1.printMovie())