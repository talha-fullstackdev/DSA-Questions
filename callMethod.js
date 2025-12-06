const studentOne={
    name:"Talha Nawaz",
    age:24,
    bioData: function(rollNumber,section){
        console.log(`student name : ${this.name} . student age : ${this.age}. his rollnumber is : ${rollNumber} and his section is ${section}`)
    }
}
// studentOne.bioData("E",192)
const studentTwo ={
    name:"Daud Ahmed",
    age:23
}
// studentOne.bioData.call(studentTwo,192,"E") // here we give object function arguments like this
studentOne.bioData.apply(studentTwo,[213,"E"])
// apply method is same as call method but call method take argument separatly and apply method takes arguments in array