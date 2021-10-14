export class Professional{

        public name: string;
        public age: number;
        public genre: string;
        public weight: number;
        public height: number;
        public hairColor: string;
        public eyeColor: string;
        public race: string;
        public isRetired: boolean;
        public nationality: string;
        public oscarsNumber: number;
        public profession: string;

                constructor(name,age,genre,weight,height,hairColor,eyeColor,race,isRetired,nationality,oscarNumber,profession){

                        this.name = name;
                        this.age = age;
                        this.genre = genre;
                        this.weight = weight;
                        this.height = height;
                        this.hairColor = hairColor;
                        this.eyeColor = eyeColor;
                        this.race = race;
                        this.isRetired = isRetired;
                        this.nationality = nationality;
                        this.oscarsNumber = oscarNumber;
                        this.profession = profession
                }

        //Metodo
        
        print()
        {
                console.log ("Este profesional tiene las siguientes características:" + "\nNombre: " + this.name + "\nEdad: " 
                            + this.age + "\nGénero: " + this.genre + "\nPeso: " + this.weight + "\nAltura: " 
                            + this.height + "\nColor de pelo: " + this.hairColor + "\nColor de ojos: "
                             + this.hairColor + "\nRaza: " + this.race + "\nRetirado: " + this.isRetired + 
                            "\nNacionalidad: " + this.nationality + "\nCuantos Oscars tiene: " + this.oscarsNumber 
                            + "\nProfesión: " + this.profession)
        }
}