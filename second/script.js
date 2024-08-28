/*  //this program is for prime number
function isPrime(num){
    if(num<=1) return false;
    if(num==2) return true;

    for(let i=2;i<=num;i++){
        if(num%i==0) return false;
    }
    return true;
}

const number=29;
if(isPrime(number)){
    console.log(number +"this number is prime number");
}else{
    console.log(number +"is not a prime number")
} */



/*    
//write a program to print arithmatic operator
let a=50;
let b=20;
let addiotion=a+b;
let subratiction=a-b;
let multiplication=a*b;
let division=a/b;
let modulo=a%b;
console.log(addiotion +"this the addition=");
console.log(" this is the subtraction="+ subratiction);
console.log("this is the multioplication="+multiplication);
console.log("this is the division="+division);
console.log("this is the module="+modulo);

*/



/*

//write a program to print the comparistion operator
import js.util.Scanner;
let a=10;
let b=20;
console.log(a==b);
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a!==b);
console.log(a!=b);
console.log(a===b);


*/

/*
//write a program to print the logical operator

let istrue=true;
let isfalse=false;
console.log(istrue && isfalse);
console.log(istrue || isfalse);
console.log(!istrue);

*/

/*
//write a program to print a bitwise operator 

var a=20;
var b=30;
console.log(a & b);
console.log(a | b);
console.log(a^b);
console.log(a<<b);
console.log(a>>b);

*/



/*
//write a program to print asiment operator

var a=20;
var b=39;

a +=b;
console.log(a);
a *=b;
console.log(a);
a -=b;
console.log(a);
a/=b;
console.log(a);
a%=b;
console.log(a);


*/

/*
//write a program to print ternary operator
let age=18;
let canvote=age>=18?"yes":"no";
console.log(canvote);

*/

/*
//write a program to print the type of operator
let variable=24;
let a="string";
let b=45.5;
console.log(typeof variable);
console.log(typeof a);
console.log(typeof b);

*/



/*
//write a program to print the string concatination operator

let a="prashant";
let b="kumar";
let fullname=a+b;
console.log("this is my full name==" + fullname);


*/




/*
//write a program to find the simple interaste
let a=2000;
let b=200;
let c=40;
let avrg=(a+b+c)/3;
var smplitrst=(a*b*c)/100;
console.log("this is the simple interaste="+smplitrst);
console.log("this is the average of three number=" +avrg);

*/


/*
//write a program to find the max number between two number
let a=34;
let b=25;
var maxnum=0;
if(a>b){
    maxnum=a;
}else{
    maxnum=b;
}
console.log(maxnum);

*/

/*
//write a program to print area of circle
let pi=3.14;
let r=2;
var areaofcircle=pi*r*r;
console.log(areaofcircle);

*/



/*
//write a program to print the ten number 
for(let i=0 ;i<=10;i++){
    console.log("this is the number ="+i);
}
*/



/*
//write a program to print ten to 1 number 
for(let i=10;i>=0;i--){
    console.log("this is the number smaller then  the 10="+i);
}
    */


/*
//write a program to print 1 to 10 number using while loop;
 
let i=0;
while(i<=10){
    console.log(i);
    i++;
}

*/


/*
//write a program to print the alternative number between 1 to 10

for(let i=0;i<=10;i+=2){
    console.log("this is the alternative number="+i);
}

*/

/*
//write a program to print the even number between 1 to 10 
for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log("this is the even number=" +i);
    }else {
        console.log("this is not a even number=" +i);
    }
}

*/


/*
//write a program to print the odd number using for loop between 1 to 10
for(let i=0;i<=10;i++){
    if(i%2!=0){
        console.log(i)
    }
}

*/


/*
//write a program to print the number which is divisible by 7 between 1 to 100;
for(let i=1;i<=100;i++){
    if(i%7==0){
        console.log("the number which is divisible by 7 ="+i);
    }
}
*/


/*
let n1=0;
let n2=1;
let n3=0;
var a=10;
console.log(n1,n2);
for(let i=0;i<=a;i++){
 n3 =n1+n2;
console.log(n3);
n1=n2;
n2=n3;
}
*/

/*
//write a program to add two number by using function


function add(n1,n2){
    var n3=n1+n2;
    return n3;
}
let result=add(2,5);
console.log(result);
let n4=add(3,5);
console.log(n4);

*/

/*
//write a program to print the number is even or not by using  function
function even(n1){
   if(n1%2==0){
    console.log("number is even");
   }
   else{
    console.log("number is not even");
   }
}
let num2=even(2);
console.log(num2);
*/


/*
//write a program to print the number in the array which multiply by two then after will print the number

function multiplay2(arr) {
    for (var i = 0; i <= arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

var arr=[2,5,9,12];
let result=multiplay2(arr);
console.log(result);

*/

/*
//write a program to print the maximam number between two number
function num(n2, n3) {
    let max = n2;
    if (n2 < n3) {
        max = n3;
    }
    return max;
}
let result=num(8,9);
console.log(result);

*/

/*
//write a program to print the  number with out using loop

function printnum(a){
    if(a>10){
        return;
    }
    console.log(a);
    printnum(a+1);
}
printnum(1);

*/

/*
function printnumber(a){
    if(a>10){
        return;
    }
    console.log(a);
    printnumber(a+1);
}
printnumber(1);
*/

/*
//write the program to conunt the number of string 
function printnum(a){
    return a.split(" ").length;
}
let result=printnum("this is the program to count the number");
console.log(result);
*/

/*
//write a program to match the string is correct or not
function printnum(str1,str2){
    if(str1.match(str2)){
        return true;
    }
    else{
        return false;
    }
}

let result=printnum("prashant","kumar");
console.log(result);

*/

/*
//write a program to print the sum of the array by using for loop
function sumarray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    return sum;
}
var printf=[23,33,45,65,34];
let finalsum=sumarray(printf);
console.log(finalsum);

*/

/*
//write a program to find the number in the array is even or odd

function print(arr){
    for(let i=0;i<=arr.length;i++){
        if(i%2==0){
            console.log(arr[i]);
        }
        else{
            console.log("this number is not even");
        }
    }

}
let even=[22,33,44,55,66];
let odd=print(even);
console.log(odd);

*/



/*
//write a program to find duplicate number in the array // this question i will not solve 
function array(num) {
    
    for (let i = 0; i <= num.length; i++) {
        for (let j = i + 1; i < num.length; j++) {
           if(num[j] == num[i])
            console.log("this is the matching number=" + num[j]);
        }
        console.log("there is no any duplicate number");
    }
}
let num1= [20, 30, 40, 50];
array(num1);
console.log(array);
*/


/*
//write a program to find the max element in the array

function largestnumber(arr){
    let max=arr[0];
    for(let index=0;index<=arr.length;index++){
        if(arr[index]>max){
            max=arr[index];
        }

    }
    return max;
}
var data=[44,56,77,88,99,100];
let result=largestnumber(data);
console.log(result);

*/

/*
//write a program to make the sort element in the array that is given
var sortArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let num = [34, 56, 77, 8, 35, 7, 4];
var thi = sortArray(num);
console.log(thi);

*/

/*
//write a program to count the number of zeros in the given array
function zeros(arr){
    let count=0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]==0){
            count++;
        }
    }
    return count;
}
let arr=[22,33,55,0,0,0,30];
let thi=zeros(arr);
console.log(thi);

*/


/*
//write a program to print the factorial of the number-:

function factorial(num){
    var n=1;
    let result=1;
    if(num==0 || num==1){
        return result;
    }else if(num>1){
        for(let i=num;i>=1;i--){
            result=result*i;
        }
        return result;
    }
    else{
        return "number has to bee posative"
    }
}

let number=5;
let fac=factorial(number);
console.log(fac);
*/


/*
//write a program to print the  the given word is palindrome or not
function isPalindrome(str) {
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) { // Use !== for comparison
            return "It is not a palindrome";
        }
    }
    return "This is a palindrome";
}

const inputString = "madam";
const result = isPalindrome(inputString);
console.log(result);

*/


/*
//write a program to print the star pattern 
function starpattern(num){
    for(let i=0;i<=num;i++){
        let stars='';
        for(let j=1;j<=i;j++){
           stars +="*";
        }
       
        console.log(stars);
    }
   
  
}
let number =5;
let ans=starpattern(number);
console.log(ans);

*/


/*
//write a program to find the sum assign to the variable function
var sum=function(a,b){
    let add=a+b;
    return add;
}
var jor=sum(3,5);
console.log(jor);
*/

/*
//write a program to find the number present in the array if the number is  find then return that number if the number is not then return -1;

function searching(num,key){
    for(let i=0;i<num.length;i++){
       if(num[i]===key){
           return i;
       }
    }
    return -1;
}
let num=[33,44,55,22,59,66,67];
let show=searching(num,59);
console.log(show);

*/


//write a program to print the all the leter in the string have or not if they have then print yes other wise print no 



//function to be passed as an argument like  //this is also called as call back function  


/*
function f1(n1,n2){
    console.log(n1);
    console.log(n2);
    n1(5);
    n2(9);
}

var f2=(x)=>console.log(x);
var f3=(x)=>console.log(x);
f1(f2,f3);
*/


/*
function f2(n2,n3){
    console.log(n2);
    console.log(n3);
    n2(4);
    n3(5);
}
var f3=(x)=>console.log(x);
var f4=(x)=>console.log(x);
f2(f3,f4);


function f3(n2,n3){
    console.log(n2);
    console.log(n3);
    n2=34;
    n3=45;
}
var f4=(x)=>console.log(x);
var f5=(x)=>console.log(x);
f3(f4,f5);

*/

    /*
function checkleter(alphabet){
    for (let i='a' ;i <='z';i++) {
        for(let j = alphabet;j<alphabet.length;j++){
            console.log(alphabet);
            if(i===alphabet){
                console.log("this all the charecter is present");
            }
            else{
                console.log("no not all is not present");
            }
        }
    }    
}
let num="ram is a good boy and aman is a bad boy";
var lll=checkleter(num);
console.log(lll)    

    */


function displayuser(user,number,fun){
    console.log(user);
    console.log(number);
    console.log(fun);
    fun(10);

}
let user={id:"abcd" , name:"prashant" , rollno :"43"};
let number=[45443345664, 67788];
let f2=function(x){
    console.log("Inside f2 function", x);
}
displayuser(user,number,f2);


function displayuser(user,number,fun){
    console.log(user);
    console.log(number);
    console.log(fun);
    fun(29);
}
let user={id:"fghm",name:"fghjkfgghj",rollno:"3749959"};
let number=[45678907,34567890];
let f2=functiono(x){
    console.log("dfghjkdfghjk",x);
}
displayuser(gh,hjk,ghj);
