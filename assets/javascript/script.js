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
    
    function addDynamicButton(buttonText) {
        var button = $("<button>");
        button.text(buttonText)
        $("#topic-buttons").append(button);
    }
    // Display giphy
    

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
    

    /// JQUERY
    // "ADD" Button

    $("#add-giph").on("click", function(event) {
        event.preventDefault();
        var userInput = $("#user-input").val().trim();
        topics.push(userInput)
        renderButtons();
    });
    renderButtons();
})