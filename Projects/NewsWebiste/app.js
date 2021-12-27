// b65a40a5c06141b1956f15ec06c2937d

const API = 'b65a40a5c06141b1956f15ec06c2937d';
let source = 'bbc-news';

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `news.json`, true)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let article = json.articles
        let newshtml = '';
        let i = 1;
        for (news in article) {
            console.log(i)
            console.log(article[news].title)
            console.log(article[news].description)

            let newss = `<div class="card">
                            <div class="card-header" id="heading${i}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${i}"
                                    aria-expanded="false" aria-controls="collapse${i}">
                                   <b>Breaking News ${i}:</b> ${article[news].title}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#newsAccordion">
                                <div class="card-body"> ${article[news].description}. <a href="${article[news].url}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            i += 1;
            newshtml += newss;
        }
        newsAccordion.innerHTML = newshtml
 
    } else {
        console.log("Error Ocuured");
    }
}
xhr.send();