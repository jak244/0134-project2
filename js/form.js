var total = 0, end = "";

function handleForm() {

  var amount, title;

  amount = document.forms["thisForm"]["Flight"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Flight<br>");
    }
  }

  amount = document.forms["thisForm"]["Intangibility"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Intangibility<br>");
    }
  }

  amount = document.forms["thisForm"]["Invisibility"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Invisibility<br>");
    }
  }

  amount = document.forms["thisForm"]["Shapeshifting"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Shapeshifting<br>");
    }
  }

  amount = document.forms["thisForm"]["Super Speed"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Super Speed<br>");
    }
  }

  amount = document.forms["thisForm"]["Super Strength"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Super Strength<br>");
    }
  }

  amount = document.forms["thisForm"]["Telekinesis"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Telekinesis<br>");
    }
  }

  amount = document.forms["thisForm"]["Teleportation"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Teleportation<br>");
    }
  }

  amount = document.forms["thisForm"]["Time Travel"].value;
  if(!isNaN(amount)) {

    if(amount > 0) {
      total += amount;
      end = end.concat("x", amount, " Time Travel<br>");
    }
  }

  localStorage.setItem("cart", end);
}

function cart() {
  document.getElementById("replace").innerHTML = localStorage.getItem("cart");
}

function thanks() {
  alert("Thank you for your purchase!!");
}
