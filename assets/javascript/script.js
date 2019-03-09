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
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("giphy");
            a.attr("data-topic", topics[i]);
            a.text(topics[i]);
            $("#topic-buttons").append(a);
        }
    }

    function alertGiphyTopic() {
        var giphyTopic = $(this).attr("data-topic");
        alert(giphyTopic);
    }
    

    /// JQUERY
    // "FIND" Button
    $("#find-giph").on("click", function(event) {
        event.preventDefault();
        var userInput = $("#user-input").val().trim();
        var giphyURL = "http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC&limit=5&rating=pg-13";

        // Display User's search in giphy-view
        $.ajax({
            url: giphyURL,
            method: "GET"
        }).then(function(response) {
            $("#giph-view").text(JSON.stringify(response));
            console.log("User Input: " + userInput);
        });
    });

    //Adds event listener to all elements with .giphy class
    $(document).on("click", ".giphy", alertGiphyTopic);

    renderButtons();
})