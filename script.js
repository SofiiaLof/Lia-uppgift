$(".modal-wrapper").hide();

$(document).ready(function(){
    const names = new Names();

    $(".login-button").click(function(){
        
     if($(".modal-wrapper").is(':hidden')){
      $(".modal-wrapper").show();
      $(".main-page-container").addClass("blured");
     }
    });

    $(".close-icon").click(function(){
        $(".modal-wrapper").hide();
        $(".main-page-container").removeClass("blured");
    });

    $("#submit-btn").click(function(){
        let inputValue = $("#name-input").val();
        let inputBold = $("<strong></strong>").text(inputValue);
        let pElement;
    
        let storage = JSON.parse(localStorage.getItem("userName"));
       

        if(storage === null){

            pElement = $("<p></p>").text("Du är inloggad som ");
            names.addNames(inputValue);
           
        }else{

            if(storage.includes(inputValue)){
                pElement  = $("<p></p>").text("Välkommen tillbaka! Du är inloggad som ");
            }
            else{
                names.addNames(inputValue);
            }
            
        }
        
        pElement.append(inputBold);
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