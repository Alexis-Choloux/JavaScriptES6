//4.1 Découverte

const [a, b] = [1, 2, 3, 4]
console.log(a)
console.log(b)

const [ , , c, ] = [1, 2, 3, 4]
console.log(c)

const {first, last} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)

const {age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(age)

//4.2 Application

console.log(data)

Object.values(data).forEach((element) => {
    console.log(element.texte + element.dateDebut + element.dateFin)
});