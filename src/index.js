/* Strings
    Find all substrings from a string
*/

function mySubStr(str) {
  var length = str.length;
  var substrs = [];
  for (var i = 0; i < length; i++) {
    var s = "";
    for (var j = i; j < length; j++) {
      s += str[j];
      substrs.push(s);
    }
  }
  return substrs;
}
console.log(mySubStr("abcdec").sort());

var strs = ["a", "ab", "aa", "bb", "aa", "bc"];

/* Arrays 
    Find unique values from an array
*/

console.log(
  strs.filter((s, index) => {
    return strs.indexOf(s) === index;
  })
);

const uniq = Object.keys(
  strs.reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {})
);

console.log("uniq", uniq);

/* Anagrams
   "monk" and "kmno" are anagrams
*/

console.log(checkIfAnagrams("ledl", "dell"));

console.log(anagram("monk", "onmk"));

const anagramsStrs = [
  "monk",
  "konm",
  "nkom",
  "bbc",
  "cbb",
  "dell",
  "ledl",
  "llde"
];

console.log("anagramsStrs", anagramsStrs);

// short, but not so efficient approach

function checkIfAnagrams(str1, str2) {
  return (
    str1
      .split("")
      .sort()
      .join("") ===
    str2
      .split("")
      .sort()
      .join("")
  );
}

// More efficient approach

function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    // not the same length, can't be anagram
    return false;
  }
  if (s1 === s2) {
    // same string must be anagram
    return true;
  }

  var c = "",
    i = 0,
    limit = s1.length,
    match = 0,
    idx;
  while (i < s1.length) {
    // chomp the next character
    c = s1.substr(i++, 1);
    console.log({ c });
    // find it in the second string
    idx = s2.indexOf(c);
    console.log({ idx });
    if (idx > -1) {
      // found it, add to the match
      match++;
      // assign the second string to remove the character we just matched
      s2 = s2.substr(0, idx) + s2.substr(idx + 1);
      console.log({ s2 });
    } else {
      // not found, not the same
      return false;
    }
  }
  return match === s1.length;
}

/* Sorting algorithms
*/

// Bubble sort
// O(n^2)

var arrBubble = [23, 43, 12, 9, 4, 21];
for (var i = 0; i < arrBubble.length; i++) {
  for (var j = 0; j < arrBubble.length - i; j++) {
    if (arrBubble[j] > arrBubble[j + 1]) {
      var temp = arrBubble[j];
      arrBubble[j] = arrBubble[j + 1];
      arrBubble[j + 1] = temp;
    }
  }
}
console.log("Bubble sort after arr", arrBubble);

var arrBubbleRec = [23, 43, 12, 9, 4, 21];

function bubbleSort(arr, length) {
  if (length === 1) {
    return;
  }
  for (var i = 0; i < length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  bubbleSort(arr, length - 1);
}
bubbleSort(arrBubbleRec, arrBubbleRec.length);
console.log("Recursive Bubble sort after arr", arrBubbleRec);

// Selection sort
// O(n^2)

var arrSelection = [23, 43, 12, 9, 4, 21];
for (var i = 0; i < arrSelection.length; i++) {
  var minIndex = i;
  for (var j = i + 1; j < arrSelection.length; j++) {
    if (arrSelection[j] < arrSelection[minIndex]) {
      minIndex = j;
    }
  }
  var temp = arrSelection[i];
  arrSelection[i] = arrSelection[minIndex];
  arrSelection[minIndex] = temp;
}

console.log("Selection sort after arr", arrSelection);

// Insertion sort
// O(n^2)

var arrInsertion = [23, 43, 12, 9, 4, 21];
console.log("arrInsertion before", JSON.stringify(arrInsertion));
for (var i = 1; i < arrInsertion.length; i++) {
  var j = i - 1;
  var key = arrInsertion[i];
  while (j >= 0 && arrInsertion[j] > key) {
    console.log("j", i, j);
    arrInsertion[j + 1] = arrInsertion[j];
    j--;
  }
  arrInsertion[j + 1] = key;
}

console.log("Insertion sort after arr", arrInsertion);

// Recursive Insertion sort
// O(n^2)

var arrInsertionRec = [23, 43, 12, 9, 4, 21];
console.log("arrInsertionRec before", JSON.stringify(arrInsertionRec));

function recInsertionSort(arr, len) {
  for (var i = 1; i < arr.length; i++) {
    if (len <= 1) {
      return;
    }

    recInsertionSort(arr, len - 1);

    var last = arr[len - 1];
    var j = len - 2;
    while (j >= 0 && arr[j] > last) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = last;
  }
  return arr;
}

recInsertionSort(arrInsertionRec, arrInsertionRec.length);

console.log("Recursive Insertion sort after arr", arrInsertionRec);

// Merge Sort

var arrMerge = [23, 43, 12, 9, 4, 21];

let text = "This is single space string in javascript";
console.log("text", text, text.length);
let newLen = 58;

function justifyText(textStr, newLen) {
  let justifiedStr = "";
  let diff = newLen - textStr.length;
  console.log("diff", diff);
  let currentSpaces = textStr.split(" ").length - 1;
  console.log({ currentSpaces });
  return justifiedStr;
}

let newStr = justifyText(text, newLen);
console.log("newStr", newStr, newStr.length);
