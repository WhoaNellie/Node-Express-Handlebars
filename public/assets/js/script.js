$(document).ready(function(){

    // create a new burger
    $("#newBurger").click(function(){
        $.ajax("/api/burger", {
            type: "POST",
            data: {name: $("#burgerName").val().trim()}
        }).then(function(){
            location.reload();
        });
    });

    // devour a burger
    $(".devour").click(function(){
        $.ajax(`/api/burger/${$(this).attr("data-id")}`, {
            type: "PUT"
        }).then(function(){
            location.reload();
        });
    });

    $(".eaten").click(function(){
        $.ajax(`/api/delburger/${$(this).attr("data-id")}`, {
            type: "DELETE"
        }).then(function(){
            location.reload();
        });
    });
});