$(document).ready(function() {
    
    var topics = [
        "Nature",
        "Assembly Line",
        "Chemical Reaction",
        "Wooden Automaton", 
        "Continuous Loop",
        "Optical Illusion",
        "Magic Eye", 
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

            var results = response.data;
            for (var i = 0; i < results.length; i++) {
            var giphDiv = $("<div class='giph'>");
            
            var url = response.data[i].images.fixed_height.url; // Link to specific giph aspects in Object
            var image = $("<img>").attr("src", url);
            
            giphDiv.append(image);
            $("#giph-view").prepend(giphDiv);
            }
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
debugger;

// Next step is to insert For-Loop to append 10 Giphs to giph-view.