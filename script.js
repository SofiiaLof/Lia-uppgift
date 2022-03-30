

$(document).ready(function(){
    $(".modal-wrapper").hide();

    $(".login-button").click(function(){
        if($(".modal-wrapper").is(':hidden')){
            $(".modal-wrapper").show();
            $(".main-page-container").addClass("blured");
            
        }else{
            $(".modal-wrapper").hide();
        }
     
    });

    $(".close-icon").click(function(){
        $(".modal-wrapper").hide();
        $(".main-page-container").removeClass("blured");
    });

    $("#submit-btn").click(function(){
        let inputValue = $("#name-input").val();
        let pElement = $("<p></p>").text("Du är inloggad som " + inputValue);
        $(".main-login-button").append(pElement);
        $(".main-page-container").removeClass("blured");
        $(".modal-wrapper").hide();
        $(".login-button").html("Logga ut");
    });
  });