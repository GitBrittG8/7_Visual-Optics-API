$(document).ready(function() {
    
    var topics = [
        "Nature",
        "Assembly Line",
        "Chemical Reaction",
        "Wooden Automaton", 
        "Continuous Loop",
        "Optical Illusion",
        "Magic Eye", // To see Magic Eye Illusions, unfocus your eyes and look "through" the screen.
    ];
    
    /// FUNCTIONS

    function renderButtons() {
        $("#topic-buttons").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("giphy");
            a.attr("data-topic", topics[i]);
            a.text(topics[i]);
            $("#topic-buttons").append(a);
        }
    }
    
    function displayGiphy() {
        var giphy = $(this).attr("data-topic");
        var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + giphy + "g&api_key=qOIsjLz9Eaf7IbS8C0UnGwJhPYZbrPrq&rating=pg-13&limit=10";
        $.ajax({
            url: giphyURL,
            method: "GET"
          }).then(function(response) {
            $("#giph-view").text(JSON.stringify(response));
          });
    }

    /// JQUERY
    // "ADD" Button

    $("#add-giph").on("click", function(event) {
        event.preventDefault();
        var userInput = $("#user-input").val().trim();
        topics.push(userInput)
        renderButtons();
    });

    $(document).on("click", ".giphy", displayGiphy);

    renderButtons();
})