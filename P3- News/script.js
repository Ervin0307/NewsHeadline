console.log("yoyoy");
// e2d748e03b6e48b2a98a2aabd6428a84

let source = "bbc-news";
let key = "e2d748e03b6e48b2a98a2aabd6428a84";

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`,
  true
);
// xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card">
      <div class="card-header" id="heading${index}">
      <h2 class="mb-0">
      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
          aria-expanded="false" aria-controls="collapse${index}">
         <b>Breaking News ${index+1}:</b> ${element["title"]}
      </button>
      </h2>
  </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
            </div>`;
      newsHtml += news;
    });
    newsAccordian.innerHTML = newsHtml;
  } else {
    console.log("some error occured");
  }
};

xhr.send();

let newsAccordian = document.getElementById("newsAccordian");

// newsAccordian.innerHTML += news;
