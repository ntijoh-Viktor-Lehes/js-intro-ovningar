// SMALLEST OF TWO

function smallest_of_two(num1, num2){
    return num1 < num2 ? num1 : num2;
}

console.log("Smallest of two (7,6): \n" + smallest_of_two(7,6));
console.log("\n");


// LARGEST OF TWO (EXTRA FUNCTION)

function largest_of_two(num1, num2){
    return num1 > num2 ? num1 : num2;
}

console.log("Largest of two (5,4): \n" + largest_of_two(5,4));
console.log("\n");


// LARGEST OF THREE

function largest_of_three(num1,num2,num3){
    return largest_of_two(largest_of_two(num1,num2),num3);
}

console.log("Largest of three (2,1,4): \n" + largest_of_three(2,1,4));
console.log("\n");


// SMALLEST OF FOUR

function smallest_of_four(num1,num2,num3,num4){
    return smallest_of_two(smallest_of_two(num1,num2),smallest_of_two(num3,num4));
}

console.log("Smallest of four (4,3,5,6): \n" + smallest_of_four(4,3,5,6));
console.log("\n");


// TICKETPRICE

function ticketPrice(age){
    let price = 0;
    if (age < 18) {
        price = 10;
    }
    else if (age <= 64) {
        price = 20;
    }
    else {
        price = 15;
    }
    return price;
}

console.log("Ticket price (2): \n" + ticketPrice(2));
console.log("Ticket price (28): \n" + ticketPrice(28));
console.log("Ticket price (100): \n" + ticketPrice(100));
console.log("\n");


// NEXT NUMBER

function nextNumber(num) {
    return num + 1;
}

console.log("Next number (1): \n" + nextNumber(1));
console.log("\n");


// IS EMPTY

function isEmpty(array) {
    return array.length == 0;
}

console.log("Is empty ([1,2]): \n" + isEmpty([1,2]));
console.log("Is empty ([]): \n" + isEmpty([]));
console.log("\n");


// FIRST OF

function firstOf(array) {
    return array[0];
}

console.log("First of ([1,2]): \n" + firstOf([1,2]));
console.log("\n");


// LAST OF

function lastOf(array) {
    return array[array.length-1];
}

console.log("Last of ([1,2]): \n" + lastOf([1,2]));
console.log("\n");


// PREPEND

function prepend(array, num) {
    let newarray = array;
    newarray.unshift(num);
    return newarray;
}

console.log("Prepend ([1],2): \n" + prepend([1],2));
console.log("\n");


// APPEND

function append(array,num) {
    let newarray = array;
    newarray.push(num);
    return newarray;
}

console.log("Append ([1],2): \n" + append([1],2));
console.log("\n");


// LENGTH

function length(array) {
    return array.length;
}

console.log("Length ([1,2,3]): \n" + length([1,2,3]));
console.log("\n");


// SUM

function sum(array) {
    return array.reduce((previousNumber, currentNumber) => previousNumber + currentNumber)
}

console.log("Sum ([1,2,3]): \n" + sum([1,2,3]));
console.log("\n");


// AVERAGE

function average(array) {
    return sum(array) / array.length;
}

console.log("Average ([4,5,6]): \n" + average([4,5,6]));
console.log("\n");


// CONCAT

function concat(array1, array2) {
    const newarray = array1;
    let i = 0;
    while (array2.length > i) {
        append(newarray, array2[i]);
        i+=1;
    }
    return newarray;
}

console.log("Concat ([1,2],[3,4]): \n" + concat([1,2],[3,4]));
console.log("\n");


// STARTS WITH

function startsWith(string, char) {
    return string.charAt(0) == char;
}

console.log("Starts with ('hej','h'): \n" + startsWith("hej","h"));
console.log("Starts with ('hej','e'): \n" + startsWith("hej","e"));
console.log("\n");


// ENDS WITH

function endsWith(string,char) {
    return string.charAt(string.length-1) == char;
}

console.log("Ends with ('hej','j'): \n" + endsWith("hej","j"));
console.log("Ends with ('hej','e'): \n" + endsWith("hej","e"));
console.log("\n");


// CHOMP

function chomp(string) {
    if (endsWith(string, "\n")) {
        return string.substring(0, string.length-1);
    }
    else return string;
}

console.log("Chomp ('hej\\n'): \n" + chomp("hej\n"));
console.log("Chomp ('hej'): \n" + chomp("hej"));
console.log("\n");


// INDEX OF

function indexOf(string, char) {
    let i = 0;
    while (string.length > i) {
        if (string[i] == char) {
            return i;
        }
        i+=1;
    }
    return null;
}

console.log("Index of ('hej','e'): \n" + indexOf("hej", "e"));
console.log("Index of ('hej','x'): \n" + indexOf("hej", "x"));
console.log("\n");


// COUNT (STRING)

function countS(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

console.log("Count string ('heeej','e'): \n" + countS("heeej", "e"));
console.log("Count string ('hj','e'): \n" + countS("hj", "e"));
console.log("\n");


// COUNT (ARRAY)

function countA(array,char) {
    return countS(array,char);
}

console.log("Count array ([1,2,2,3,4], 2): \n" + countA([1,2,2,3,4], 2));
console.log("Count array ([1,3,4], 2): \n" + countA([1,3,4], 2));
console.log("\n");


// CONTAINS (STRING)

function containsS(string, char) {
    return countS(string, char) != 0;
}

console.log("Contains (string) ('heej','e'): \n" + containsS("heej", "e"));
console.log("Contains (string) ('heej','x'): \n" + containsS("heej", "x"));
console.log("\n");


// CONTAINS (ARRAY)

function containsA(array, int) {
    return countA(array, int) != 0;
}

console.log("Contains (array) ([1,2,2,3,4], 2): \n" + containsA([1,2,2,3,4], 2));
console.log("Contains (array) ([1,3,4], 2): \n" + containsA([1,3,4], 2));
console.log("\n");


// REMOVE

function remove(string1, string2) {
    if(!string1.includes(string2)) return string1;
    indexOfFirst = string1.indexOf(string2);
    indexOfLast = indexOfFirst + string2.length;
    return string1.substring(0, indexOfFirst) + string1.substring(indexOfLast, string1.length);
}

console.log("Remove ('test1test2test3','test2'): \n" + remove("test1test2test3", "test2"));
console.log("Remove ('hej','ej'): \n" + remove("hej", "ej"));
console.log("Remove ('hej','x'): \n" + remove("hej", "x"));
console.log("\n");


// REPLACE

function replace(string1, string2, string3) {
    if(!string1.includes(string2)) return string1;
    indexOfFirst = string1.indexOf(string2);
    indexOfLast = indexOfFirst + string2.length;
    return string1.substring(0, indexOfFirst) + string3 + string1.substring(indexOfLast, string1.length)
}

console.log("Replace ('test1test2test3', 'test2', 'test4'): \n" + replace("test1test2test3", "test2", "test4"))
console.log("\n");


// SPLIT

function split(string, char) {
    let strings = []
    let indexes = []
    for(let i = 0; i < string.length; i++)
        if(string[i] == char) append(indexes, i);
    let lastIndex = 0;
    for(let i = 0; i < indexes.length; i++) {
        append(strings, string.substring(lastIndex, indexes[i]));
        lastIndex = indexes[i] + 1;
    }
    append(strings, string.substring(lastIndex, string.length));
    return strings;
}

console.log("Split ('a:b:c:d:e', ':'): \n" + split("a:b:c:d:e", ":"));
console.log("\n");


// IS VOWEL (EXTRA FUNCTION)

function is_vowel(char) {
    switch(char.toLowerCase()) {
        case "a": return true;
        case "e": return true;
        case "i": return true;
        case "o": return true;
        case "u": return true;
        case "å": return true;
        case "ä": return true;
        case "ö": return true;
        default: return false;
    }
}


// ROVARIZE

function rovarize(string) {
    let newstring = "";
    for (let i = 0; i < string.length; i++) {
        if (!is_vowel(string[i])) {
            newstring += string[i] + "o" + string[i].toLowerCase();
        }
        else newstring += string[i];
    }
    return newstring;
}

console.log("Rovarize ('Bajsar'): \n" + rovarize("Bajsar"));
console.log("\n");


// DEROVARIZE

function derovarize(string) {
    let newstring = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newstring += string[i];
        }
        else if (!is_vowel(string[i])) {
            newstring += string[i];
            i += 2;
        }
        else newstring += string[i];
    }
    return newstring;
}

console.log("Derovarize ('Bobajojsosaror bobjojörornonaror i soskokogogenon'): \n" + derovarize("Bobajojsosaror bobjojörornonaror i soskokogogenon"));
console.log("\n");

// TODO
//  test