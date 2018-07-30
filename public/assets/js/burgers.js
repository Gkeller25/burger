// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
      if(newDevour == 0) {
          newDevour = true;
      } else if(newDevour == 1){
           newDevour = false;
      }
    var newDevourState = {
      devoured: newDevour
    };
   
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var burgerInput = $("#ca").val();
      var validation = /^[a-zA-Z\s]*$/;
      if(burgerInput !== "" && validation.test(burgerInput)){
        var newBurger = {name: $("#ca").val().trim(),
        devoured: false   
        };
    
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
      } else {
        $("#ca").val("");
        alert("Input must be Letters");
      }
    });
  
    
  });
  