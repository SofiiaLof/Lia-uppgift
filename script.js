$(".modal-wrapper").hide();

$(document).ready(function () {
  const names = new Names();

  //When "Logga in" is clicked
  //Checks button-text if "logga ut" changes it to "logga in" and hides the greetings message
  //If button-text is "logga in" opens the form modal and changes background into blured

  $(".login-button").click(function () {
    let buttonValue = $(".login-button").text();

    if (buttonValue === "Logga ut") {
      $(".login-button").text("Logga in");
      $(".welcome-text").hide();
    } else {
      $(".modal-wrapper").show();
      $(".main-page-container").addClass("blured");
      $(".main-header").addClass("blured");
    }
  });

  //When close icon is clicked modal form disappears and blured effect is removed
  $(".close-icon").click(function () {
    $(".modal-wrapper").hide();
    $(".main-page-container").removeClass("blured");
    $(".main-header").removeClass("blured");
  });

  //When submit button in form is clicked the input value (user name) and greetings message appears in header
  //Checks localStorage if name has been stored or not, if stored you get welcome back message if not you get regular login-message
  // If user name is stored program does not store it again
  $("#submit-btn").click(function () {
    $(".main-header").removeClass("blured");

    let inputValue = $("#name-input").val();
    let inputBold = $("<strong></strong>").text(inputValue);
    let pElement;

    let storage = JSON.parse(localStorage.getItem("userName"));

    if (storage === null) {
      names.addNames(inputValue);
      pElement = $("<p></p>").text("Du är inloggad som ");
      pElement.append(inputBold);
      pElement.addClass("welcome-text");
    } else {
      if (storage.includes(inputValue)) {
        pElement = $("<p></p>").text("Välkommen tillbaka! Du är inloggad som ");
        pElement.append(inputBold);
        pElement.addClass("welcome-text");
      } else {
        names.addNames(inputValue);
        pElement = $("<p></p>").text("Du är inloggad som ");
        pElement.append(inputBold);
        pElement.addClass("welcome-text");
      }
    }
    $("#name-input").val('');
    $(".main-login-button").append(pElement);
    $(".main-page-container").removeClass("blured");
    $(".modal-wrapper").hide();
    $(".login-button").text("Logga ut");
  });

  //Hamburger menu toggle
  $("#hamburger-icon").click(function () {
    $("#navigation").toggleClass("expand");
  });
});

//class Name is to create a names array if localStorage is not existing the empty array creates
//If exist the names array assignes to localStorage array value
// Method addNames take a inputname as parameter and store it in localStorage
class Names {
  constructor() {
    if (JSON.parse(localStorage.getItem("userName")) === null) {
      this.names = [];
    } else {
      this.names = JSON.parse(localStorage.getItem("userName"));
    }
  }
  addNames(name) {
    this.names.push(name);
    localStorage.setItem("userName", JSON.stringify(this.names));
  }
}
