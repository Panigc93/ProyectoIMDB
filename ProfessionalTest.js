"use strict";
exports.__esModule = true;
var Professional_1 = require("./Professional");
var persona1 = new Professional_1.Professional("Peter Martín", 22, "Masculino", 78, 1.81, "Rubio", "Azules", "Blanca", false, "Inglesa", 0, "Actor");
var persona2 = new Professional_1.Professional("Lucía López", 44, "Femenino", 66, 1.59, "Negro", "Azules", "Blanca", false, "Española", 1, "Actriz");
var persona3 = new Professional_1.Professional("John Sean", 67, "Masculino", 88, 1.89, "Cataño", "Marrones", "Negra", true, "Estadounidense", 3, "Director");
var persona4 = new Professional_1.Professional("Safir Impala", 38, "Masculino", 73, 1.75, "Negro", "Negros", "Asiática", false, "Indio", 0, "Guionista");
var array = [persona1, persona2, persona3, persona4];
for (var i = 0; i < array.length; i++) {
    array[i].print();
}
