
$("#submit").on("click", function (e) {
    e.preventDefault();

    // console.log($("#addburger").val());
    let submittedburger = {
        //  burger_name : $("#newburger [name=burger]").val().trim()
        burger_name: $("#addburger").val().trim()
    }

    //console.log(submittedburger.burger_name)
    if (submittedburger) {

        $.ajax("/api/burgers", {
            type: "POST",
            data: submittedburger
        }).then(
            function () {
                location.reload()
            });
    }
})

// $.post( "/api/burgers", {
//     test: "Test"
// });

$(".devour").on("click", function (e) {
    event.preventDefault();
    let id = $(this).data("burgerid");

    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(function () {
        location.reload();
    })
})


