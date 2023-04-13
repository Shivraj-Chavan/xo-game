s = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

arr = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1);

function fun() {
  al = 0;
  for (i = 0; i < s.length; i++) {
    vvv = s[i][0];
    a2 = s[i][1];
    a3 = s[i][2];
    if (arr[vvv] == "X" && arr[a2] == "X" && arr[a3] == "X") {
      al = 1;
    } else if (arr[vvv] == "O" && arr[a2] == "O" && arr[a3] == "O") {
      al = 2;
    }
  }
  if (al == 1) {
    rs.style.top = "10px";
    rst.innerText = "🤩 - X is Win - 🤩";
  } else if (al == 2) {
    rs.style.top = "10px";
    rst.innerText = "🤩- O is Win -🤩";
  }
}

flag = 1;
$(document).ready(function () {
  $(".in").click(function () {
    if (flag == 1) {
      $(this).removeClass("green").html("");
      $(this).addClass("red").html("X");
      flag = 2;
      v = this.id;
    } else if (flag == 2) {
      $(this).removeClass("red").html("");
      $(this).addClass("green").html("O");
      v = this.id;
      flag = 1;
    }
    innum = v.charAt(1) - 1;
    arr[innum] = $("#" + v).html();
    fun();
    draw();
  });
});

function draw() {
  flg = 0;
  arr.forEach(function (i) {
    if (i == 1) {
      flg = 1;
    }
  });
  if (flg == 0) {
    console.log("drawwwww");
    rs.style.top = "10px";
    rst.innerHTML = "😣 Match Is Draw 🤣";
  }
}

function cl() {
  rs.style.top = "-100%";
  arr = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1);
  $(".in").html("").removeClass("red").removeClass("green");
}
