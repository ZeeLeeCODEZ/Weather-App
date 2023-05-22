// var x = 15;
// var hello = () => "Good Day! From: Global Function";

// (
// function () {
//     var x = 20;
//     console.log(x);
//     var hello = () => "Good Day! From: IIFE"
//     console.log(hello())
// }

// )();
// console.log(x)
// console.log(hello())


// let Firstname = "Riley";
// Firstname = "Lia";

// console.log(Firstname);

// function healthStatus (test){
//     if(test){
//         const firstName = "Larry";
//         const yrOfBirth = 1990;
//         console.log("After the health check, " + firstName + " who was born in the year " + yrOfBirth + ", is hereby declared healthy and fit to join the military. Congratulations ")
//     }

// }

// healthStatus(true)

// ES5

// console.log(namey)
// var namey = "Larry"

// var firstNamey = "Larry"
// var agey = 8
// var favFoody = "Burgers"

// console.log(
//     "OMG, " + firstNamey + " is SO hairy! Like, she's only " + agey + " and she's already Shaving! Oh, and did you know she's addicted to " + favFoody + "?"
// )

// let lastNamey = "McFencer"
// let hobby = "drawing"
// let favColry = "Red"

// console.log(
//     `Sorry about that... That was my lil sis, Kenny ${lastNamey} ... Though, I'm actually pretty cool... Like I LOVE ${hobby} because... Who doesn't? I also really like the color ${favColry} cuz It's cool!! `
// )


// var numbers = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 11];
// var numType = numbers.map(function(el) {
//     if(el%2 == 1){
//         return "odd"
//     }else{
//         return"even"
//     }
// })

// console.log(numType)

// let numType2 = numbers.map((el) => {
//     if(el%2 == 1){
//         return "odd"
//     }else{
//         return"even"
//     }
// })

// const person = ["Tikristi", 12, "teal and tomato pink", "spaghetti", "making videos", "lemonade", "phs ed"];

// const [firstName, age, favColor, favFood, hobby, favDrink, favSubject] = person

// console.log(firstName)
// console.log(age)
// console.log(favColor)
// console.log(favFood)
// console.log(hobby)
// console.log(favDrink)
// console.log(favSubject)


// function sum (a, b, c){
//     return a+b+c
// }
// let values = [5, 10, 15];
// let totalSum = sum(...values)
// console.log(totalSum)

// var nammies = ["Lia", "Zenny", "Zee", "Zenzen"];
// var agies = [10, 7, 18, 20];
// var allArreys = [...nammies, ...agies]
// console.log(allArreys)


// const yrOfBirth = function(...years){
//     console.log(years)
// }

// yrOfBirth(2019, 2013, 2000, 1987)

// function myFunction(x, y = 2) {
//     return x * y;
//   }
//   document.getElementById("demo").innerHTML = myFunction(4);

// function person (firstName, lastName, yrOfBirth = 2015){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.yrOfBirth = yrOfBirth
// }

// var john = new person("Bobby", "Dimple", 2011)

// console.log(john)

// function bussiness (busiName, ownerName, yrOfStart, whatSells, bestCostumer, bestProduct, worstCostumer){
//     this.busiName = busiName
//     this.ownerName = ownerName
//     this.yrOfStart = yrOfStart
//     this.whatSells = whatSells
//     this.bestCostumer = bestCostumer
//     this.bestProduct = bestProduct
//     this.worstCostumer = worstCostumer
// }

// var busi = new bussiness("Bobby's", "Bobby Dimple (again)", 2008, "Stuff", "Bob Dimples", "Bobby Dimple (yes cus why not)")

// console.log(busi)



// let begin = function(){
//     console.log("BEGIN");
//     alert("HELLO!");
// }

// let end = function(){
//     console.log("END");
// }

// begin()
// end()

// Synchronous JavaScript

// const second = () => {
//     setTimeout(() => {
//         console.log("THIS IS COMING FROM SECOND FUNCTION !! :D");
//     }, 2000)
// }

// const first = () => {
//     console.log("THIS IS COMING FROM FIRST FUNCTION !! :D");
//     second()
//     console.log("THIS IS THE END !!")
// }

// first()

// const academic = (username, area, talent, origin, hate, favFood, job, favAnimal, badHabit) =>{
//     setTimeout(() =>  {
//         console.log(`Hello my name is ${username}!`);

//         setTimeout(() => {
//             console.log(`I am in ${area}!`);

//             setTimeout(() => {
//                 console.log(`I am good at ${talent}!`);

//                 setTimeout(() => {
//                     console.log(`I am from ${origin}!`);

//                     setTimeout(() => {
//                         console.log(`I hate ${hate}!`);

//                         setTimeout(() => {
//                             console.log(`My favourite food is ${favFood}!`);

//                             setTimeout(() => {
//                                 console.log(`I want to be a ${job} when I grow up!`);

//                                 setTimeout(() => {
//                                     console.log(`My favourite animal is ${favAnimal}!`);

//                                     setTimeout(() => {
//                                         console.log(`A bad habit of mine is ${badHabit}...`);
//                                     }, 2000)
//                                 }, 2000)
//                             }, 2000)
//                         }, 2000)

//                     }, 2000)

//                 }, 2000)
//             }, 2000)

//         }, 2000)
//     }, 2000)
// }

// academic("SuperSmartBobby", "Bobbycity", "bowling", "BobbyLand", "Bobby Dimple", "any food from the ground", "a professional dumbo", "squirrel", "picking my nose")
(
    function (){
        var city = "Japan";
    var APIkey = "b72e66766502b83411cfafb393888966";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + "&appid=" + APIkey)
        .then(result => {
        console.log(result)
        return result.json()
    })
    .then(data => {
        console.log(data)
    })
    }
)();


(
    function (){
        var weather = {
            APIkey: "b72e66766502b83411cfafb393888966",
            fetchWeather: function(city){
                fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
                city + "&units=metric&appid=" + this.APIkey)
                .then((response) => response.json())
                .then((data) => this.displayWeather(data))
            },
            displayWeather: function (data){
                const{name} = data
                const{icon, description} = data.weather[0]
                const {temp, humidity} = data.main
                const {speed} = data.wind
                document.querySelector(".city").innerHTML = `Weather in ${name}`;
                document.querySelector(".time").innerHTML = `Temp ${temp}&#8451;`;
                document.querySelector(".cloud").innerHTML = `Cloudiness ${description}`;
                document.querySelector(".humidity").innerHTML = `Humidity : ${humidity}%`;
                document.querySelector(".wind").innerHTML = `Wind : ${speed}km/h`;
                document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
            },
            search: function(){
                this.fetchWeather(document.querySelector(".search-bar").value)
            },
        };
        document.querySelector(".btn").addEventListener("click", function(){
            weather.search()
        })

        document.querySelector(".search-bar").addEventListener("keyup", function(){
            if(event.key == "Enter"){
                weather.search()
            }
        })
    }
)();

