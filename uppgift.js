// 1. smallest of two
function störst(a, b) {
  return a > b ? a : b;
}

// 2.  largest of two
function störstAvTre(a, b, c) {
  return störst(störst(a, b), c);
}

// 3. smallest of four
function störstAvFyra(a, b, c, d) {
  return störst(störstAvTre(a, b, c), d);
}

// 4. TicketPrice
function ticketPrice(age) {
  if (age >= 18 && age <= 64) {
    return 20;
  } else if (age < 18) {
    return 10;
  } else {
    return 15;
  }
}

// 5. Next Number
function nextNum(num) {
  return num + 1;
}

// 6. Is Empty
function isEmpty(arr) {
  return arr.length === 0;
}

// 7. First of
function firstOf(arr) {
  return arr[0];
}

// 8. Last of
function lastOf(arr) {
  return arr[arr.length - 1];
}

// 9. Prepend
function prepend(arr, i) {
  return [i, ...arr];
}

// 10. Append
function append(arr, i) {
  return [...arr, i];
}

// 11. Length
function length(arr) {
  return arr.length;
}

// 12. Sum
function sum(intArr) {
  return intArr.reduce((acc, x) => acc + x, 0);
}

// 13. Average
function average(arr) {
  return sum(arr) / arr.length;
}

// 14. Concat
function concat(arr1, arr2) {
  return arr1 + arr2;
}

// 15. Starts With
function startsWith(str, char) {
  return str[0] === char;
}

// 16. Ends With
function endsWith(str, char) {
  return str[str.length - 1] === char;
}

// 17. Chomp
function chomp(str) {
  if (str.endsWith("\n")) {
    return str.slice(0, -1);
  }
  return str;
}

// 18. Index Of
function indexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

// 19. Count (String)
function countStringOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// 20. Count (Array)
function countArrayOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

// 21. Contains (String)
function containsString(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
}

// 22. Contains (Array)
function containsArrayValue(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

// 23. Remove (String)
function removeStringOccurrences(str1, str2) {
  return str1.split(str2).join("");
}

// 24. Replace (String)
function replaceStringOccurrences(str1, str2, str3) {
  return str1.split(str2).join(str3);
}

// 25. Split (String)
function splitString(str, char) {
  const result = [];
  let current = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      result.push(current);
      current = "";
    } else {
      current += str[i];
    }
  }
  if (current) {
    result.push(current);
  }
  return result;
}
