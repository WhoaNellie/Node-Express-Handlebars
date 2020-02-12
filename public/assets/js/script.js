$(document).ready(function(){

    // create a new burger
    $("#newBurger").click(function(){
        // event.preventDefault();
        $.ajax("/api/burger", {
            type: "POST",
            data: $("#burgerName").val().trim()
        }).then(function(){
            location.reload();
        });
    });

    // devour a burger
    $(".devour").click(function(){
        // event.preventDefault();
        $.ajax(`/api/burger/${this.data-id}`, {
            type: "PUT"
        }).then(function(){
            location.reload();
        });
    });
});