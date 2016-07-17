
  getQuote();
  $("#getQuote").on('click', getQuote);
  $("#shareButton").on('click', tweet);  

function tweet(){
  var urlBuilder = 'https://twitter.com/intent/tweet?text="'+currentQuote+ '" -' + currentAuthor;
  window.open(urlBuilder);

}

function getQuote() {
  $.ajax({
      headers: {
      "X-Mashape-Key": "RuKcidCypgmshhKJ04T3Ay3C6bLqp1yqBpRjsnAR4uqKTEXw76",
      Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
       },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {
        var r = JSON.parse(response);
        currentQuote = r.quote;
        currentAuthor = r.author;
        document.getElementById("quote").innerHTML = currentQuote;
        document.getElementById("author").innerHTML = "-" + currentAuthor;
        document.body.style.background = "#" +      Math.random().toString(16).slice(2, 8);
     }
  })};