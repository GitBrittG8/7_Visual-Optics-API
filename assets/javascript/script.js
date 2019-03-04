$()
    var topic = [
        "Nature",
        "Assembly Line",
        "Chemical Reaction",
        "Wooden Automaton", 
        "Continuous Loop",
        "Optical Illusion",
        "Magic Eye", // To see Magic Eye Illusions, unfocus your eyes and look "through" the screen.
    ];

    var testURL = "http://api.giphy.com/v1/gifs/search?q=magic+eye&api_key=dc6zaTOxFJmzC"
    //var queryURL = 

    $.ajax({
        url: testURL,
        method: "GET"
    }).done(function(response) {
        console.log(response);
    });


    /*
    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function(response) {
    console.log(response);
    });

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
    console.log(response);
    });
    */


    console.log("This console.log will probably happen first because of asynchronicity.");
    var x = 2;
    var y = 10;
    var z = 13;
    console.log("We can also assign some variables and do some arithmetic while we wait too: 2 + 10 + 13 = ", x + y + z);
  

    //FUNCTIONS

    //PROCESS

    //When user clicks on one of the buttons, gifs show up of the topic

    //I will need search bar

    //I will need API key

    //I will have to connect the buttons to the gifs
