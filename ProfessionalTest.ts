import { Professional } from "./Professional";

let persona1 = new Professional("Peter Martín", 22, "Masculino", 78, 1.81, "Rubio", "Azules", "Blanca", false, "Inglesa",0,"Actor")
let persona2 = new Professional("Lucía López", 44, "Femenino", 66, 1.59, "Negro", "Azules", "Blanca", false, "Española",1,"Actriz")
let persona3 = new Professional("John Sean", 67, "Masculino", 88, 1.89, "Castaño", "Marrones", "Negra", true, "Estadounidense",3,"Director")
let persona4 = new Professional("Safir Impala", 38, "Masculino", 73, 1.75, "Negro", "Negros", "Asiática", false, "Indio",0,"Guionista")

let array = [persona1,persona2,persona3,persona4]

for (let i=0; i<array.length;i++){
        array[i].print()
}