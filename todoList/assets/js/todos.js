//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(key){
    if(key.which === 13){
        //grab new todo text from input
        let todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
