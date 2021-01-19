// 1
function countDownSheep(n) {
  if (n <= 0) {
    console.log("All sheep jumped over the fence");
    return;
  }
  console.log("Another sheep jumps over the fence");
  countDownSheep(n - 1);
}

countDownSheep(3);

// 2
function powerCalculator(a, b) {
  if (b < 0) {
    console.log("exponent should be b >= 0");
    return;
  }
  return console.log(Math.pow(a, b));
}

powerCalculator(10, 2);
powerCalculator(10, -2);

// 3
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

// OR
function reverseStringAgain(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// 4
function triangleCount(n) {
  if (n < 1) {
    return 0;
  }
  return n + triangleCount(n - 1);
}

console.log(triangleCount(4));

// 5
function stringSplit(str, separator) {
  if (str.length === 0) {
    return;
  }
  var stringArray = [];
  var tempString = "";
  for (i = 0; i <= str.length; i++) {
    if (i === str.length) {
      stringArray.push(tempString);
    } else if (str.charAt(i) !== separator) {
      tempString += str[i];
    } else {
      stringArray.push(tempString);
      tempString = "";
    }
  }
  return stringArray;
}

console.log(stringSplit("02/20/2020", "/"));

// 6
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

// 7
function factorial(n) {
  if (n < 2) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

// 8
const mazeSolver = (maze, i = 0, j = 0) => {
  //if we are at the exit, exit loop
  if (maze[i][j] === "e") {
    return "";
  }

  let letter;
  if (maze[i][j + 1] === " " || maze[i][j + 1] === "e") {
    j++;
    letter = "R";
  } else if (maze[i + 1][j] === " " || maze[i + 1][j] === "e") {
    i++;
    letter = "D";
  } else {
    //go left until you hit an obstacle then go down onemptied
    //this code could be improved to include cases for where you need to go up
    for (let counter = j; counter > 0; counter--) {
      if (letter) {
        letter = letter + "L";
      } else {
        letter = "L";
      }
      j--;
    }
    i++;
    return letter + "D" + mazeSolver(maze, i, j);
  }
  return letter + mazeSolver(maze, i, j);
};

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", "*", " ", " ", " "],
  [" ", "*", "", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];
console.log(mazeSolver(maze));

// 9
function solveAllMazes(maze, x = 0, y = 0, path = "", validPaths = []) {
  if (validPaths.length > 3) {
    return validPaths;
  }

  //Solutions
  if (y !== maze[0].length - 1 && maze[x][y + 1] === "e") {
    validPaths.push(path + "R");
    return validPaths;
  } else if (x !== maze.length - 1 && maze[x + 1][y] === "e") {
    validPaths.push(path + "D");
    return validPaths;
  } else if (y !== 0 && maze[x][y - 1] === "e") {
    validPaths.push(path + "L");
    return validPaths;
  } else if (x !== 0 && maze[x - 1][y] === "e") {
    validPaths.push(path + "U");
    return validPaths;
  }

  if (
    y !== maze[0].length - 1 &&
    path.substring(path.length - 1) !== "L" &&
    maze[x][y + 1] === " "
  ) {
    solveAllMazes(maze, x, y + 1, path + "R", validPaths);
  }
  if (
    path.substring(path.length - 1) !== "R" &&
    y !== 0 &&
    maze[x][y - 1] === " "
  ) {
    solveAllMazes(maze, x, y - 1, path + "L", validPaths);
  }
  if (
    path.substring(path.length - 1) !== "U" &&
    x !== maze.length - 1 &&
    maze[x + 1][y] === " "
  ) {
    solveAllMazes(maze, x + 1, y, path + "D", validPaths);
  }
  if (
    path.substring(path.length - 1) !== "D" &&
    x !== 0 &&
    maze[x - 1][y] === " "
  ) {
    solveAllMazes(maze, x - 1, y, path + "U", validPaths);
  }
}

// 10
function anagramFinder(word) {
  let list = [];
  if (word.length === 1) {
    list.push(word[0]);
    return list;
  }
  for (let i = 0; i < word.length; i++) {
    const prefix = word[i];
    const rest = word.substring(0, i) + word.substring(i + 1);
    let words = anagramFinder(rest);
    for (let j = 0; j < words.length; j++) {
      list.push(prefix + words[j]);
    }
  }
  return list;
}

// 11
const facebook = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

function orgChart(obj, indent = "") {
  let output = "";
  for (let key in object) {
    output = output + indent + key + "\n";
    output = output + orgChart(obj[key], indent + "    ");
  }
  return output;
}

// 12
const binarize = function (number) {
  if (number <= 0) {
    return "";
  }
  let binary = Math.floor(number % 2);
  return binarize(Math.floor(number / 2)) + binary;
};
