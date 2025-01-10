/*****************************/
/* //1// */
var cleanNames=([" injustice", " SuperMan", "Batman ", " flash "])
function cleanNames(names) {
  return names.map(name=>name.trim())
}
console.log(cleanNames);

/*****************************/
/* //2// */
var  miles = [10, 20, 30, 40];
function convert(miles){
    var km= miles.map(miles=>miles*1.60934)
    console.log(km)
  var totalDistanceInKilometers=km.reduce((sum,km)=>sum+km,0)
  return totalDistanceInKilometers
}
 console.log(convert(miles))

/*****************************/
/* //3// */
var numbers= [1, 2, 3, 4, 5]
var squareAndAverage=(array)=>{
    var squareAraay=array.map(num=>num**2)
    var sumofSquares=squareAraay.reduce((acc,num)=>acc+num,0)
    return sumofSquares /array.length;
}
console.log(squareAndAverage(numbers))

/*****************************/
/* //4// */
var numbers = [1, 2, 3, 4, 5];
function element(array){
 return array.map(element=>element+4)
} 
console.log(element(numbers))

/*****************************/
/* //5// */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenDoubleEven=numbers
.filter(num=>num%2===0)
.map(num=>num*2)
.reduce((acc,num)=>acc+num);
console.log(evenDoubleEven)

/*****************************/
/* //6// */
var  words = ['apple', 'banana', 'cherry', 'date'];
var upperCaseWords=words.map(word=>word.toUpperCase())
console.log(upperCaseWords)

/*****************************/
/* //7// */
var heros = [
    {name: 'Iron Man', power: 'Tech'},
    {name: 'Spider-Man', power: 'Spider abilities'},
    {name: 'Thor', power: 'Godly powers'},
    {name: 'Hulk', power: 'Super strength'}
    ]
    var newHerso=heros.map((hero,index) =>{
        return{
          hero:hero.name,
          power:hero.power,
          id:index
        }
    })
    console.log(newHerso)

/*****************************/
/* //8// */
var  inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function filtermethod(inputWords){
 return inputWords.filter(words=>words.length>=7)
}
console.log(filtermethod(inputWords))

/*****************************/
/* //9// */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = numbers.filter(num=>num %2 !==0) 
var divisibleBy2or5=numbers.filter(num=>num %2 ===0||num %5 ===0)
var divisibleBy3Squared=numbers
.filter(num=>num %3===0)
.map(num=>num**2)
var sumSquaredDivisibleBy5=numbers
.filter(num=>num %5===0)
.map(num=>num**2)
.reduce((acc,num)=>acc+num,0)

console.log(oddNumbers)
console.log(divisibleBy2or5)
console.log(divisibleBy3Squared)
console.log(sumSquaredDivisibleBy5)

/*****************************/
/* //10// */
var nums = [11, 22, 33, 46, 75, 86, 97, 98];
var squaredEvenNums=nums
.filter(num=>num %2===0)
.map(num=>num*num)
var sum=nums.reduce((acc,num)=>acc+num,0)

console.log(squaredEvenNums)
console.log(sum)

/*****************************/
/* //11// */
var countries = ['India', 'United States', 'Russia', 'Japan', 'China'];
var filteredCountries=countries.filter(countries=>{
    return !(countries.startsWith('U')|| countries.startsWith('R'))
});
var upperCaseCountries=filteredCountries.map(countries=>countries.toUpperCase())
var totalCharacters=upperCaseCountries.reduce((acc,countries)=>acc+countries.length,0)

console.log(filteredCountries)
console.log(upperCaseCountries)
console.log(totalCharacters)

/*****************************/
/* //12// */
var numbers = [12, 45, 67, 89, 23, 56, 73, 99, 100];
var numbersGreaterThan50=numbers.filter(num=>num>50)
console.log(numbersGreaterThan50)