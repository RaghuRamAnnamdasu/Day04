/*Q1) Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######  */

//Answer
for(var i=1;i<=7;i++){
    var output="";
    for(var j=1;j<=i;j++){
        output=output+"#";
    }
    console.log(output);
}

/* Q2) Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];                          */

//Answer
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
]; 
friends[0]= "Munnabai";
console.log(friends);

/* Q3) Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica. */

//Answers
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
]; 
function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        console.log(friends[i]);
        if(friends[i] == "CaptianAmerica") {
            break;
        }
    }
}
dataHandling(friends);

/* Q4) We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.*/

//Answer
var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
];
function dataHandling(input1, input2){
    console.log(input1.concat(input2));
}
dataHandling(friends1, friends2);

/* Q5) Add your name to the end of the friends array, and add another name to beginning */

//Answer
var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
friends.push("Raghu");
friends.unshift("Pravallika");
console.log(friends);

/* Q6) Add a new key value pair to myobject
key : ten
value : ten        */

//ANSWER
myobject = {1:"one","11":1,"name":"arun"};
myobject["ten"]="ten";
console.log(myobject);