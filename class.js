class Person {
    constructor(name, age){
        console.log(`Hello Im ${name}`)

        this.name = name
        this.age = age
    }
    talk(){
        console.log(`Hello my name is ${this.name} and Im ${this.age} years old`)
    }
}

const newPerson = new Person('Renan', 18)
const newPerson2 = new Person('Camylla', 17)
const newPerson3 = new Person('Fabricio', 17)

newPerson.talk()
newPerson2.talk()
newPerson3.talk()









class Pessoa {
    name;
    age;
    talk(){
        console.log(`Ola eu sou ${this.name} e eu tenho ${this.age}`)
    }
}

const novaPessoa = new Pessoa()

novaPessoa.name = 'Renan'
novaPessoa.age = 18
newPerson.talk()

