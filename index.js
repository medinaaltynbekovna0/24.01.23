let myName = "Medina";
let myFamily = "Parent,brothers,sister";
let myCountry = "Kyrgyzstan";
let myHobby = "to read";
let mySchool = "Sadyrbek Abdrakmanova";
let myCours = "It";
let myFavoriteAnimal = "hourse";
let myPhone = "poco";
let myBook = "nike";
let mySurname = "Damirova";
let myNumber = "five";
let myBirthday = " January twenty-fourth ";
let myFavoriteNumber = 5;
let myHeight = 1.60;
let myAdress = 108;

let MoodCool = true;
let myEnglishbad = true;
let LiveinKyzylSuu = true;;

let example1 = 20 - 5;
let example2 = 15 + 3;
let example3 = 4 * 3;
let example4 = 18 / 4;
let exaample5 = 12 / 4 * 2;
let example6 = (8 + 2) / 5;
let example7 = 9 / 9;
let example8 = 6 + (2 ** 4);
let example9  = 15 % 2;
let example10  = 25 / 5;

let example11 = 6 > 3;
let example12 = 5 === 5;
let example13 = 2 < 4;

let a = 5;
b = 5,
c = 5 ;
 

let number = "пять";
if (number > 0) {
	 console.log("Число" + number + "положиельное");
}
else if (number < 0) {
	console.log("Число" + "отрицательое")
}

else if (number < 0) {
  console.log("Число" + number + "отрительное")
}
else if (number === 0){
	  console.log("Число роль не отрицательное  и не положительное");
}
else {
	console.log(number + "не является числом");
}

//Является ли число 5 четным или нечетным числом.

let number2 = 5;
if ( number2% 2 ===0) {
	console.log(number2  + "нечетное число")
}
else if (number2 % 2 ===1){
	console.log(number2 + "is odd")
}
else {
	console.log(number2 + " is not a number");

} 

// У васи 212 сомов хватит ли ему денег на мороженное которая стоит 40 сом.

let vasya = 212;
let ice = 40;
if (vasya > ice) {
	console.log("хватит");
}
else if (vasya < ice) {
	console.log("не хватает");
}

//Вывести каким сезоном является ли = "Январь"
let month = "январь";
if (month === "декабрь" || month === "январь" || month === "февраль") {
	console.log("это зима");
}
else if (month === "март" || month === "апрель" || month === "май"){
	console.log("it is spring")
}