function calculate(event) {
  event.preventDefault();
  boy = document.getElementById("i1").value;
  girl = document.getElementById("i2").value;
  flames = "FLAMES";
  for (i = 0; i < boy.length; i++) {
    for (j = 0; j < girl.length; j++) {
      if (boy[i] === girl[j]) {
        boy = boy.slice(0, i) + boy.slice(i + 1);
        girl = girl.slice(0, j) + girl.slice(j + 1);
        i--;
        break;
      }
    }
  }
  ans = boy.length + girl.length;
  while (flames.length !== 1) {
    var temp;
    if (ans > flames.length) {
      temp = ans % flames.length;
      if (temp === 0) {
        temp = flames.length;
      }
    }
    else {
      temp = flames.length - 1;
    }
    flames = flames.slice(0, temp - 1)+flames.slice(temp);
  }
  switch (flames) {
    case "F": flames = "Friends";
      break;
    case "L": flames = "Lovers";
      break;
    case "A": flames = "Affection";
      break;
    case "M": flames = "Marriage";
      break;
    case "E": flames = "Enemies";
      break;
    case "S": flames = "Siblings";
      break;

  }
  document.getElementById("result").innerHTML = flames;

}
