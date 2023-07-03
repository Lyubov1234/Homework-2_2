let cardinalPoints = prompt("В какую сторону света желаешь отправиться?");

switch (cardinalPoints) {
  case "юг":
    alert("на юг пойдешь - счастье найдешь");
    break;

  case "север":
    alert("на север пойдешь - много денег найдешь");
    break;

  case "запад":
    alert("на запад пойдешь - верного друга найдешь");
    break;

  case "восток":
    alert("на восток пойдешь - иразработчиком станешь");
    break;

  default:
    alert("Попробуй еще раз");
}


