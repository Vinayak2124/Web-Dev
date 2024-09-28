//? 1995 - Brendon eich at Netscape in 10 days
//* mocha -> livescript -> javascript for java fame
//! 1996 -> ECMA International for standardization, which resulted in ECMAscript
//* 2015 -> decided to switch to annual releases to ECMAscript

// var myName = "Vinayak";
// console.log("My name is :",myName)
// var num = 20;

// ?A variable is a container that hold a value can be use everywhere in the program..! --> variable(key) varname = value;
//*  variable name starts with --> a letter, underscore, or a dollar
//*  variable names cannot contain spaces , reserved keywords 
//*  variable are case sensitive written in camelCase -->myAge , myName
 
//?  Data Types:
//* primitive -> String,Number,Boolean,undefined,null,BigInt,Symbol
//*  Object Data Type -->  Object,Array,date >

//? Type of operator -- > 
// console.log(typeof myName);
// console.log(typeof num);
// console.log(typeof null) // ->it shows object which is bug...!

//? convert a string to number -->
// var favNum = "10"
// console.log(typeof +favNum)
// console.log(typeof Number(myName))

//? Convert number to string -->
// console.log(typeof String(num))
// console.log(typeof (num + ""))

//? parseInt and Parsefloat used to convert the string into a integer and floating number
// console.log(parseInt("123.343"))
// console.log(parseFloat("123.343"))
// console.log(parseFloat("$123.343"))
// console.log(isNaN("123"))
// console.log(isNaN("abc"))

//* --------------------------------------------
//! TYPE COERCION - THERE ARE TWO TYPES OF TYPE COERCION IN JAVASCRIPT IMPLICIT AND EXPLICIT 
//! IF WE SUBTRACT AND INTEGER IN QUOTES WITH ANOTHER NUMBER IT WILL WORK PROPERLY WITH THE HELP OF THE IMPLICIT
//* IF WE PLUS THAN CONCATENATE
//? FOR STRING CONCATENATION WE USE PLUS SYMBOL

// console.log("10" + 20)
// console.log(9 - "5")
// console.log("vinayak"-3);
// console.log("Java"+"Script")
// console.log("abc" - "xyz")
// console.log(true + true)
// console.log(false - true)
// console.log(false + false)

//* ````````````Expression and Operator ````````````````
//! operand <operator> operand
//* ASSIGNMENT -> =,+=,-=,*=,/=,%= ; ARITHMETIC --> +-*/% ; COMPARISON --> ==,<=,>=!=,(===); LOGICAL --> &&,||,!
// var result = 0.1 + 0.2
// console.log(result);
// console.log(result.toFixed(2));
// console.log(5 == "5");
// console.log(5 === "5"); // --> strict equals to check the data type also

//* TERNARY OPERATOR-->
//? conditon ? expression Iftrue :expressionIffalse ;

//*=============================================================================================

//! if else switch and CONDITIONAL LOOPS  :
//? If else :
/**if(cond){ statements
           }else{ statements
           }
**/

//? Switch statement :
/** 
 * switch(var):
 * case cond : statement ; break;
 * case n : statements ; break;
 * default : statement ; break;
 * 
 */

//? While loop :
/**
 * while(cond){
 * statements;
 * }
 * 
 */
//? do while loop :
/**
 * do{
 *  statements;
 * }while(cond);
 */
//? For loop :
/**
 * for(initializer;cond;iteration){
 * statements;
 * }
 */

//* function :
/**
 * function functionName(Parameter...){
 *  return 
 * }
 * 
 * functionName(argument...);
 */

//* Anonymous function :- func without name, assign directly to the variable
//? var result =  function(a,b){ return a+b;}
//! (function(a,b){
// console.log(a+b);
// return a+b;
// })(3,4);

//* EcmaScript -->
//? IN ECMAScript 2015 - ES6  :--> 
/** Let AND Const ---> block scoped variable..!
 * let = it is a mutable used for declaring a variable.. 
 * const = it is  a immutable used for declaring a variable but cant changed once assigned..!
 * 
 * Template String --> 
 * let FullName = ${Name} ${Surname}
 * let message = i m ${age} year old..
 * let Multiline = `This is a multiline String..
 *                  using the string template..!
 *                  it has many new features makes easy syntax..! `
 *  
 * Default Argument --> parameter to be initialized with default values if no values or undefined passed to it
 * default value pass as the parameter..
 * 
 * Arrow function --> using => , return is optional.. it is like a anonymous function..!
 *  const sum = (a,b) => console.log("The sum of ${a} and ${b} is : ${a+b}")

 * 
 */

//* Arrays :--> all the things is object in javascript {collection of same data types, but we can store all the types , while accessing may create trouble}

// const  person = ["RAM","HARI","SHYAM","GHNSHYAM"];
//! let person = new array("RAM","HARI","SHYAM") --> using array constructor

// let fruits = ["Apple", "Orange","Banana","Mango"];
// console.log(fruits[2]);
// fruits[2] = "Watermelon";
// console.log(fruits);

// for(let item of fruits){
//     console.log(item);
// }

// fruits.push("Banana");
// fruits.push("grapes");
// for(let item in fruits){
//     console.log(fruits[item]);
// }

//? for each :--> operation performed in the for each loop cant be returned to the main function, only for that scope

// fruits.forEach((currele, index, arr)=>{
//     console.log(`${currele} ${index}`);
// })

//? Map function -->operation performed in the map function can be return

// const fr = fruits.map((currele, index, arr)=>{
//     return (`my fav fruit is ${currele} at ${index}`);
// })
// console.log(fr);

//* methods in list -->

let number = [1,2,3,4,5];
number.push(10,12,15); //-->Add an element at the end of the array
number.pop(); //--> del element from the last
// console.log(number);
// console.log(number(-1));
// console.log(number.push(13)); //--> it return the new length after adding that element..!
number.unshift(21,23,25,24) //--> add in the starting
number.shift() //--> del from the starting 

//! Splice method ---> it is a all rounder method 
//? splice(start, delete_count,item_1,item_2)

// let fruits = ["Mango","banana","Grapes","Orange"];

// console.log(fruits.splice(1, 1,"Guava"));
// console.log(fruits);

//? Search in Array -->

// let persons = ["hari", "ram","shyam","sita","gita","hari"]
// console.log(persons.indexOf("sita")); //--> return the index of that element also we can give the starting index..!
// console.log(persons.includes("hari")); // --> return true or false or like (element , start index)
// console.log(persons.lastIndexOf("hari"));// --> index start from the backward..!

//?  search filter -->
// find --> it will give the value use same as map function
// findIndex --> it will provide the index of the value and syntax same  as the map function
// filter --> it will give all the value in array which is in present in the list and syntax same as the map function
// const num = number.filter((curr_element) =>{ return currelement > 15 ;
    // })


// let num = [1,23,43,5,567,8,64,2,34,7,89,3,4,2];

// let value = 2;
// const updated_cart = number.filter((current_element)=> { return current_element !== value;})

// console.log(updated_cart);

// const numbers = [1,2,34,4,56,6,78,2,34];
// let Unique_Value = numbers.filter((curr_element, index, arr)=>{
//     return arr.indexOf(curr_element) === index ;
// })
// console.log(Unique_Value);
// console.log([...new Set(number)]);

//? sort :-->

// let nam = ["Myank","vinayak","mangesh","prince","sakib","sahil","anurag","ayush","harish"];
// nam.sort();
// console.log(nam);

// let numbers = [1,2,4,6,8,9,5,3,0,7];
// numbers.sort((a,b)=>{
//     if (a>b) return 1;
//     if (b>a) return -1;
// })
// console.log(numbers);

//? Reduce --> it is used to store the data in single value 

// const product_price = [100,200,220,304,540,600,700];
// const total_price = product_price.reduce((acc , curr , index , arr)=>{
//     return acc + curr
// },0);
// console.log(total_price);


//*--> -----Strings------- {Sequence of character..!}<--*//

// const str ="Hello World!"
// console.log(str.length); //--> it returns the length of the string..
//? Escape character -->
// \'\' --> for single quote , \" \" --> for double quote , \n --> for new line ...!

//? String Search Methods --->
//! -- indexof -- it returns the index of the first occurrence of the string..! --> Case sensitive
// let text = "vinayak Chaube";
// console.log(text.indexOf("Chaube"));
// let Strarr = Array.from(text);
// console.log(Strarr);
// let strmap = Strarr.map((curr , index) =>{return `${curr} - ${index}`;});
// console.log(strmap);

//! -- lastindexof -- it returns the index of the last occurrence of the string ..!

// let text = "hello moto , welcome to the moto..!"
// console.log(text.lastIndexOf("moto"));

//! --search-- in this regular expression can also add in this ..! --> only for first occurrence
// console.log(text.search(/Moto/i));

//! --match-- it will return the null if str will not match -- if match then it will give the array
//! it will convert the str in the global flag without using the reg exp

// console.log(text.match("moto"));
// console.log(text.matchAll("Moto")); //--> if str will not match then it will provide empty iterator..!

//? startswith -- it will return the boolean value -- for matching the first word of the string
//? endswith -- for matching last word of the string..!

//! ---slice()--- extract a part of the string and returns the extracted part ina new string..
//! it counts the position from zero .. (including,excluding) --> it will also work in negative indexing
// let names = "vinayak";
// console.log(names.slice(1,6));

//!  -- substring -- it is similar to the slice --> it will not work in negative indexing, it will return all the strings

//! -- replace -- it is used to replace the character or word to the another one..!
//! -- replaceAll -- it will replace all the occurrence of that word..! ("v","h") or ("abc","xyz")

//! -- charAt -->it will extract the char at the index from thr given string..--> not for negative indexing
//! -- charCodeAt -- it will return the ascii value of that char
//! -- str.at -- used for accessing the value from the negative indexing also

//* str.toUpperCase(), str.toLowerCase() -->
//* str.trim()--> remove thr whitespace from the string.. from starting and ending
//*str.split(",") -->convert the string into the array..!
// let str = "apple,orange,grapes,mango";
// let sarr = str.split(",").reverse();
// console.log(sarr);
// //? to convert the array to string -->join method
// let srr = str.split(",").reverse().join(",");
// console.log(srr);
//! -- string.from --> convert arr to string
//! --- String.fromCharCode(char) --> it is used for character printing


//* ---> Math object <--- *//
// Math.PI //--> default const value of pi in Math object
// Math.round //--> it will round off the given value (4.1)=> 4 & (4.5 or above)=> 5
// Math.floor //--> it will round of the integer to the smallest integer or rounded down to its nearest int
// Math.ceil //--> it will rounded up to its nearest integer..
// Math.abs //--> it will give the absolute value positive --> or return the distance of the integer from the zero
// Math.trunc //--> it will simply return the integer value ignoring the decimal..!

// //? Exponential function --->
// Math.pow(2 ,3) //=> (2 ** 3)
// Math.sqrt(25)
// Math.log2(8)

// Math.random() // --> it will return the decimal value ranging from 0 to 1
// let value = ((Math.random()*100).toFixed(3));

//! ---- WINDOW ---- is the main container , or global object , if we want to access the members 
//! of the window then we do not refer the window object --> PARENT OF DOM(FOCUS ON THE CONTENT OF THE PAGE)
 //! AND BOM (FOCUS ON THE BROWSER ENVIRONMENT)
//? -- DOCUMENT -- is the child of window object , we need to refer the document if we want to use the
//? document object..! -->  IT IS USED TO CHANGE THE HTML CONTENT DYNAMICALLY
//? STRUCTURED DOCUMENT AS A TREE OF OBJECT --> IT IS USED FOR INTERACTING WITH THE HTML CONTENT
//* BROWSER OBJECT MODEL-- BOM IS REPRESENT THE BROWSER AS AN OBJECT AND PROVIDE  METHODS AND PROP
//* FOR INTERACTING THE BROWSER ITSELF..! --> LIKE NAVIGATOR,URL,LOCATION


//! DOM IS A WAY TO INTERACT THE HTML USING JAVASCRIPT -- IT ACTS AS AN BRIDGE BETWEEN HTML & JAVASCRIPT

//* ----> dom part is in basic2.html file <---- *//

//! --> EVENTS IN HTML <-- //

//? --> 3 WAYS TO IMPLEMENT EVENT --> INLINE , DOM OBJECT, ADDEVENTLISTNER..!

//! --> LOCAL STORAGE --> IT IS USED TO STORE THE DATA IN THE FORM OF THE KEY AND VALUE PAIR,,,!
//! --> THE DATA IS NOT DELETED UNTIL WE DELETED FROM THE WEBSITE.. NO EXPIRATION OF DATA...!
//! --> IT WILL NOT BE DELETE BY REFRESHING OR LOADING ...
//! --> it is used to store in string only.. otherwise use json to store the data..!
// localStorage.setItem("JScourse","addingData");
// localStorage.getItem("JScourse");
// localStorage.removeItem("JScourse");


//* ---> JSON.Stringify : convert a Javascript object into a JSON String..
//? ---> JSON.parse : Convert json string to javascript object..!

//!--> DATE OBJECTS -->
// const date = new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes,seconds,milliseconds)


//! --> js get date method 

// const currdate = new Date();
// const year = currdate.getFullYear();
// const month =  currdate.getMonth();
// const date = currdate.getDate();
// const day = currdate.getDay();

// console.log(currdate);

// //! -- set date method
// currdate.setFullYear(2025);
// currdate.setDate(20);
// currdate.setMonth(5);

// //! -- js get time method.....

// const hours = currdate.getHours();
// const minutes = currdate.getMinutes();
// const time = currdate.getTime();

// //! -- set time method..
// currdate.setHours(19);
// currdate.setMinutes(50);
// currdate.setTime(8274398209); //--> milliseconds

// currdate.toLocaleString();
// currdate.toLocaleDateString();
// currdate.toLocaleTimeString();


//* Time based Events -->

// setTimeout() //--> it is used to execute  a func after a specified delay in millisecond
// setInterval() // --> the setInterval func is used to repeatedly execute a func or code block at a specified interval

// clearTimeout();
// clearInterval();

// const repeatedFunction = () =>{
//     console.log("This function repeats after 1000 milliseconds");
// };
// const interval_id = setInterval(repeatedFunction, 1000);


// setTimeout(()=>{
//     clearInterval(interval_id);
// },5000)



//* HOW JAVASCRIPT WORKS ...!===?
//* --> LEXICAL ANALYSIS (TOKENS)=> SYNTAX ANALYSIS (PARSE TREE)=> COMPILATION (JIT) => EXECUTION => CALL STACK => HEAP MEMORY

//----> SYNCHRONOUS AND ASYNCHRONOUS CODE =>
// const fun2 = () =>{
//     setTimeout(()=>{
//         console.log("func2 starts and ends");
//     },2000);
// }

// const fun1 = ()=>{
//     console.log("func1 is start");
//     fun2();
//     setTimeout(()=>{
//     console.log("func1 ends ");

//     },1500)

// }
// fun1();

//! --> CLOSURE --> A closure is created when inner function has access to the variable of its outer function, even after the outer function
//! has finished executing..!

// function outerfunc(){

//     var outervariable = "i am a batman"

//     function innerfunc(){
//         console.log(outervariable);
//     }
//     return innerfunc;
// }
// var closure = outerfunc();
// closure();


//*--> ECMASCRIPT 6 <---// 2015 TO 2023
//? MODERN JAVASCRIPT -->
//! --> OBJECT PROPERTIES-->

// const name ="vinayak";
// const age = 20;

// // const person = {name : name , age : age}; //--> old method
// const person = {name , age }; //--> new shorthand method ES6
// console.log(person);

//* DESTRUCTING ARRAY --> 
//? => IT IS AN EXPRESSION THAT MAKES IT POSSIBLE TO UNPACK THE VALUES FROM ARRAYS, PROPERTIES FROM OBJ, INTO DISTINCT VARIABLES, 
// WE CAN ASSIGN THEM TO VARIABLE ALSO..!

// const numbers = [10,20,30];
// // const first = mumbers[0]; // traditional method ..!
// const [first , second , third]= numbers;
// console.log(first,second,third);

//? swapping of two variable without using extra var

// var a = 10;
// var b = 20;

// [a , b]=[b, a];
// console.log(a,b);

//! --> SPREAD OPERATOR -->
//? --> COPY ARRAY , CONCATENATE , ADDING TO EXISTING ARRAY , USED TO CONVERT THE ARRAY INTO STRING, rest operator
// let fruits = [ "Mango", "Orange","Apple","Banana"];
// let fruit1 = [...fruits];
// console.log(fruit1);

// let number1 = [1,2,3,4,5];
// let number2 = [5,6,7,8,9];
// console.log(...number1,...number2);

// fruit1.push(...["guava","grapes"]);
// console.log(fruit1);

// let country = "INDIA";
// console.log(country.split("")); //--> traditional method..!

// console.log([...country]);

// const sum = (...numbers) =>{
//     console.log(typeof numbers);
//     console.log(numbers);
//     return numbers.reduce((acc ,curr) => acc = acc +curr,0);
// };

// console.log(sum(12,34,45,56,56));

//! --> ECS 6 -2016 --->
//? instead of math.pow function we can use the (**)
// let base = 2;
// let expo = 3;
// console.log(base**expo);

//? Array.include()-->

//! --> ECS 6-  2017 --->
//* STRING PADDING --> ADDING EXTRA SPACE IN THE starting of the GIVEN STRING..!
//? USING PADSTART()--> TO PAD FROM THE BEGINNING ;
const Name = "Javascript";
// const paddingname = Name.padStart(20);
// console.log(paddingname);
// console.log(paddingname.length);

//? using padend() --> adding extra space in the end of the given string..!
// const padding_name = Name.padEnd(20,"*");
// console.log(padding_name);

//? --> trailing commas ---> at the end of the list , functions , object we can add the extra commas for the future entry of that field..
// [1,2,3,] --> function(sum,s,)

//! ---> ECS 6- 2018 -->
//--> rest or spread operators can also works with the array and objects--> new update!

//!--> ECS 6 -2019 -->
//* Array.prototype{flat,flatMap}

//? flat - it is used for creating a new array instance from a multidimensional  ARRAY..!
// const nestedArray1 = [1,2,[34,44,[55,66,77],22],3,4];
// const flattenedArray = nestedArray1.flat(3);
// console.log(flattenedArray);


//* object.fromEntries() 
// const person = {name : "vinayak",age:20};
// const entries = Object.entries(person);
// console.log(entries);

// const newPerson =  Object.fromEntries(entries);
// console.log(newPerson);


//* String.prototype.{trimStart,trimEnd}
// let str  = "        vinayak       "
// console.log(str.length);
// console.log(str.trim().length);
// console.log(str.trimStart());


//*symbol.prototype.description-->
// const symbl = Symbol("THIS IS MY UNIQUE SYMBOL");
// console.log(typeof symbl);
// console.log(symbl.description);

//* optional(e) catch binding -->
// try {

// }catch(//e){}

//! ES 6-2020 -->
//? creating BigInts: //? using n suffixes
// const maxNumbers = Number.MAX_SAFE_INTEGER;
// // console.log(maxNumbers); //-> to do calculation above this numbers we can use the bigINts

// const largestnumber = BigInt(823466284364886482848793428734);
// console.log(largestnumber);
// let add = BigInt (maxNumbers) + 10n;
// console.log(add);

//? nullish coalescing operator --> if leftside value is null then only it will print the rhs value
// let num = 0;
// usernm = num || 10;
// usernum = num ?? 10;
// console.log(usernm, usernum);

//* Optional chaining(?.)
// const perosndetail = person.address ?.city ?? city is not present

//! ECS 6 - 2021 --->
// str.replaceAll("hello",hii);

// text.replaceAll(/\s+/g," ")

//* Logical Assignment operator => ||== ,&&=, 

//? numeric seperator => 1_000_000

//! --> ECS 6 _2022 --->
//* array.at(-2) --> we can use on string also
// Object.hasOwnProperty(price) ---> it does work for object created using null
// Object.hasOwn(obj , prop_key)


//! ---> ECS 6 - 2023 --->
//? Array.findLast() & Array.findLastIndex()
// Array.prototype Functions --> it creates a new array instead of modifying the previous one..!
//* Array.prototype.toReverse() , Array.prototype.toSorted() , Array.prototype.toSpliced(start, del ,.. items)
//? Array.with(1 , newValue);



//! --> ADVANCE JAVASCRIPT --->
// EVENT PROPAGATION  ---> PROCESS OF HOW EVENTS PROPAGATE OR TRAVEL THROUGH THE DOM ---> TWO PHASES --> CAPTURING AND BUBBLING PHASE
// BY DEFAULT BUBBLING PHASE --> BOTTOM TO TOP APPROACH ..! --> TO STOP ---> EVENT.STOPPROPAGATION
// CAPTURING PHASE --> TOP TO BOTTOM ..! 

//! --> FIRST CLASS FUNCTION --->FUNCTION CAN BE TREATED AS A VALUE, ASSIGNED TO A VARIABLE, & PASSED AS ARGUMENT ..!
//! --> HIGHER ORDER FUNC -->  THAT TAKES ONE OR MORE FUNCTION AS ARGUMENTS OR RETURNS A FUNCTION AS A RESULT..
//!--> CALLBACK FUNCTION --> FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION AND EXECUTED AFTER THE TASK COMPLETION,,!

//! ---> CALLBACK HELL ---> LIKE A PYRAMID
// WHERE A MULTIPLE NESTED CALLBACK ARE USED TO HANDLE THE ASYNCHRONOUS OPERATIONS..!

//! --> PROMISES IN JAVASCRIPT ---> IS LIKE A PLACEHOLDER FOR THE RESULT OF THE ASYNCHRONOUS OPERATIONS ...FOR THE FUTURE RESULT
// PROMISE --> PENDING ---> SETTLED(RESOLVED , REJECTED)..!
// PROMISE CAN BE DEFINE AS A FUNCTION THAT RETURNS A PROMISE ...IT TAKES TWO PARAMETER --> RESOLVED REJECT

// const pr = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("hey i miss you ..!");

//     },1500)
// });
// pr.then((res)=>{
//     console.log(res);
// })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("Dont worry, I am here for u ..!");
//     })

// const Sname = "vinayak"
// const EnrollmentProcess = (Sname) =>{
//     return new Promise((resolve , reject) =>{
//         setTimeout(() =>{
//             let sucessful = Math.random() > 0.35;

//             if(sucessful){
//                 resolve(`Enrollment successful for ${Sname}`);
//             }else{
//                 reject(`Enrollment failed for ${Sname} please try again..!`)
//             }

//         },1500)

//     })
// }
// EnrollmentProcess(Sname)
//  .then((res)=>{
//     console.log(res);
//  })
//  .catch((err)=>
//     { console.log(err);

//     })
//     .finally(()=>{
//         console.log("Enrollment process is completed..!");
//     });

//* promise methods :==>
    //? promise.all ==> it take the largest time among all the promises
    //? promise.allSettled ==> it works on individual
    //? Promise.race ==> fastest one will be the output..!

// API --> application programme interface.. for sending and receiving the resources
// It uses the request and Responses objects..
// The fetch() method is used to fetch a resource data..
// it returns the promise..
// fetch(url,[option]) --> by default option using get method..!
// let promise = fetch(URL);

