$(".modal-wrapper").hide();

$(document).ready(function(){

    const names = new Names();

    $(".login-button").click(function(){
        
       let buttonValue = $(".login-button").text();

       if(buttonValue === "Logga ut"){
        $(".login-button").text("Logga in");
         $(".welcome-text").hide();
       }else{

        $(".modal-wrapper").show();
        $(".main-page-container").addClass("blured");
        $(".main-header").addClass("blured");
           
       }
       
    });

    $(".close-icon").click(function(){
        $(".modal-wrapper").hide();
        $(".main-page-container").removeClass("blured");
        $(".main-header").removeClass("blured");
    });

    $("#submit-btn").click(function(){

        $(".main-header").removeClass("blured");

        let inputValue = $("#name-input").val();
        let inputBold = $("<strong></strong>").text(inputValue);
        let pElement;
    
        let storage = JSON.parse(localStorage.getItem("userName"));
       
        if(storage === null){

            names.addNames(inputValue);
            pElement = $("<p></p>").text("Du är inloggad som ");
            pElement.append(inputBold);
            pElement.addClass("welcome-text");
          
           
        }else{

            if(storage.includes(inputValue)){
                pElement  = $("<p></p>").text("Välkommen tillbaka! Du är inloggad som ");
                pElement.append(inputBold);
                pElement.addClass("welcome-text");
            }
            else{
                names.addNames(inputValue);
                pElement = $("<p></p>").text("Du är inloggad som ");
                pElement.append(inputBold);
                pElement.addClass("welcome-text");
            }
            
        }
        
      
        $(".main-login-button").append(pElement);
        $(".main-page-container").removeClass("blured");
        $(".modal-wrapper").hide();
        $(".login-button").text("Logga ut");


    });

    

      $("#hamburger-icon").click(function(){

        $("#navigation").toggleClass("expand");
      });
    
  });

class Names{


constructor(){
    
    if(JSON.parse(localStorage.getItem("userName")) === null){
        this.names = [];
    }else{
        this.names = JSON.parse(localStorage.getItem("userName"));
    }
}
    addNames(name){
       this.names.push(name);
       localStorage.setItem("userName", JSON.stringify(this.names));
       console.log(this.names);
    }

}