// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: {
      "month": "3",
      "num": 2434,
      "link": "",
      "year": "2021",
      "news": "",
      "safe_title": "Vaccine Guidance",
      "transcript": "",
      "alt": "I can't wait until I'm fully vaccinated and can safely send chat messages in all caps again.",
      "img": "https://imgs.xkcd.com/comics/vaccine_guidance.png",
      "title": "Vaccine Guidance",
      "day": "8"
    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "jsonp",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
