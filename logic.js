var apiURL = "";
var beginDate = "";
var endDate = "";
var search = "";
var termsNumber = 0;


$("#search-btn").on("click", function(event){
    event.preventDefault();
    // console.log("entra al click");
    search=$("#search-term").val();
    // console.log(search);
    beginDate=$("#start-year").val();
    // console.log(beginDate);
    endDate=$("#end-year").val();
    // console.log(endDate);
    termsNumber=$("#num-records option:selected" ).text();
    // console.log(termsNumber);

    apiURL="https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="+search+"&begin_date="+beginDate+"0101&end_date="+endDate+"0101&api-key=ec88054b4a7d464993b91f6eb54fba8f";

    $.ajax({
        url: apiURL,
        method: "GET"
    }).then(function(result) {
        // console.log(result);

        for(var i=0;i<termsNumber;i++){
        var title=result.response.docs[i].headline.main;
        var articleURL=result.response.docs[i].web_url;
        var link=$("<a>");
        link.attr("href", articleURL);
        link.append(title);

        $("#search-results").append(link);
        $("#search-results").append("<br>");
        }
    });
});


