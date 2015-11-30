$(document).ready(function(){

  var giphyUrl = "http://api.giphy.com/v1/gifs/search?q=";
  var publicKey = "&api_key=dc6zaTOxFJmzC";





  function searchGiphy(searchTerm){
    var url = giphyUrl+escape(searchTerm)+publicKey;

    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      for (var i = 0; i<10; i++){
        giph = response.data[i].images.fixed_height.url;
        $("#searchArea").append("<img  src=\""+giph+"\" alt=\""+(i+searchTerm)+"\">");

      }

    }).fail(function(){
      console.log("Ajax request fails!");
    });

  }

  $("button").on("click", function(){
    event.preventDefault();
    $("#searchArea").remove();
    $("form").after("<div id=\"searchArea\"></div>");
    var searchTerm = encodeURIComponent($("#keyword").val());

    searchGiphy(searchTerm);
  });

});
