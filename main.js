let lotin = new Map([
  ["A", "А"],
  ["B", "Б"],
  ["C", "С"],
  ["D", "Д"],
  ["E", "Е"],
  ["F", "Ф"],
  ["G", "Г"],
  ["H", "Х"],
  ["I", "И"],
  ["J", "Ж"],
  ["K", "К"],
  ["L", "Л"],
  ["M", "М"],
  ["N", "Н"],
  ["O", "О"],
  ["P", "П"],
  ["Q", "К"],
  ["R", "Р"],
  ["S", "С"],
  ["T", "Т"],
  ["U", "У"],
  ["V", "В"],
  ["X", "Х"],
  ["Y", "Й"],
  ["Z", "З"],
  ["Ya", "Я"],
  ["Yu", "Ю"],
  ["Sh", "Щ"],
  ["Ch", "Ч"],
  ["a", "а"],
  ["b", "б"],
  ["c", "с"],
  ["d", "д"],
  ["e", "е"],
  ["f", "ф"],
  ["g", "г"],
  ["h", "ҳ"],
  ["i", "и"],
  ["j", "ж"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["p", "п"],
  ["q", "қ"],
  ["r", "p"],
  ["s", "с"],
  ["t", "т"],
  ["u", "у"],
  ["v", "в"],
  ["x", "x"],
  ["y", "й"],
  ["z", "з"],
  ["sh", "ш"],
  ["ch", "ч"],
  ["ya", "я"],
  ["yu", "ю"],
  [" ", " "],
  [".", "."],
  [",", ","],
  ["-", "-"],
  ["0", "0"],
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8", "8"],
]);
let kirill = new Map([
  ["А", "A"],
  ["Б", "B"],
  ["С", "C"],
  ["Д", "D"],
  ["Е", "E"],
  ["Ф", "F"],
  ["Г", "G"],
  ["Х", "H"],
  ["И", "I"],
  ["Ж", "J"],
  ["К", "K"],
  ["Л", "L"],
  ["М", "M"],
  ["Н", "N"],
  ["О", "O"],
  ["П", "P"],
  ["К", "Q"],
  ["Р", "R"],
  ["С", "S"],
  ["Т", "T"],
  ["У", "U"],
  ["В", "V"],
  ["Х", "X"],
  ["Й", "Y"],
  ["Я", "Ya"],
  ["Ю", "Yu"],
  ["Щ", "Sh"],
  ["Ш", "Sh"],
  ["Ч", "Ch"],
  ["З", "Z"],
  ["а", "a"],
  ["б", "b"],
  ["с", "c"],
  ["д", "d"],
  ["е", "e"],
  ["ф", "f"],
  ["г", "g"],
  ["х", "h"],
  ["и", "i"],
  ["я", "ya"],

  ["ж", "j"],
  ["к", "k"],
  ["л", "l"],
  ["м", "m"],
  ["н", "n"],
  ["о", "o"],
  ["п", "p"],
  ["к", "q"],
  ["p", "r"],
  ["с", "s"],
  ["т", "t"],
  ["у", "u"],
  ["в", "v"],
  ["x", "x"],
  ["й", "y"],
  ["з", "z"],
  ["щ", "sh"],
  ["ч", "ch"],
  [" ", " "],
  [".", "."],
  [",", ","],
  ["-", "-"],
  ["0", "0"],
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8", "8"],
  ["9", "9"],
]);
let lotinArea;
let kirillArea = "";
document.querySelector(".lotin-input").addEventListener("input", function () {
  kirillArea = "";
  lotinArea = document.querySelector(".lotin-input").value;
  let arr = lotinArea.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "s" && arr[i + 1] == "h") {
      arr[i] = "sh";
      arr[i + 1] = "";
    }
    if (arr[i] == "c" && arr[i + 1] == "h") {
      arr[i] = "ch";
      arr[i + 1] = "";
    }
    if (arr[i] == "y" && arr[i + 1] == "a") {
      arr[i] = "ya";
      arr[i + 1] = "";
    }
    if (arr[i] == "y" && arr[i + 1] == "u") {
      arr[i] = "yu";
      arr[i + 1] = "";
    }
    if (lotin.get(arr[i])) {
      kirillArea += lotin.get(arr[i]);
    } else {
      kirillArea += arr[i];
    }
  }
  document.querySelector(".kirill-input").value = kirillArea;
});
document.querySelector(".kirill-area").addEventListener("input", function () {
  lotinArea = "";
  kirillArea = document.querySelector(".kirill-area").value;
  let arr = kirillArea.split("");
  for (let i = 0; i < arr.length; i++) {
    if (kirill.get(arr[i])) {
      lotinArea += kirill.get(arr[i]);
    } else {
      lotinArea += arr[i];
    }
  }
  document.querySelector(".lotin-area").value = lotinArea;
});
