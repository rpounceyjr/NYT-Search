


$("#searchBtn").on("click", function search(){
    $("#resultDiv").empty()
    var searchInput = $("#searchInput").val();
    var recordNumber = $("#recordNumberSelect").val();
    var startYear = "";
    var endYear = "";
    if ($("#startYear").val() && $("#endYear").val()) {
      startYear = `&begin_date=${$("#startYear").val()}0101`;
      endYear = `&end_date=${$("#endYear").val()}1231`;
    }
        console.log(searchInput)
        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchInput}${startYear}${endYear}&api-key=23L7B6ycKhTNEi2yza9Q6tD6EmGLuMML`;
        console.log(queryURL)
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          var responseArray = response.response.docs
          console.log(responseArray)
          for (var i = 0; i < recordNumber; i++) {
              var title = responseArray[i].headline.main
              var author = responseArray[i].byline.original
              var releaseDate = responseArray[i].pub_date
                var release = releaseDate.split("T")
                $("#resultDiv").append(`
                <div>
                Title: ${title}<br>
                ${author}<br>
                Release Date: ${release[0]}
                </div>
                <br>
                `);
          }
          });
        });
    $("#clearBtn").on("click", function(){
        $("#resultDiv").empty()});
        // &begin_date=${startYear}0101
        // &end_date=${endYear}1231