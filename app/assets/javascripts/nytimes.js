console.log('nytimes.js running')

var baseURL = "http://api.nytimes.com/svc/topstories/v1/home.json";
  var apiKey = "";

function getResults() {

  $.ajax({
    url: baseURL + apiKey,
    dataType: 'json',
    success: 
    renderResults
  });
};


function renderResults(data){
	debugger;
	var article = {
		abstract: data["results"][0]["abstract"],
		byline: data["results"][0]["byline"],
		title: data["results"][0]["title"],
		url: data["results"][0]["url"],
		created_date: data["results"][0]["created_date"]
	}
}