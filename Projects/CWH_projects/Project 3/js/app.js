
console.log("Project 3 - New Website")
// 639ab38ee64b4eb5b858e04305e58937

let apiKey = "639ab38ee64b4eb5b858e04305e58937";

let newsAccordian = document.getElementById("newsAccordian");


// grab news container
    const xhr = new XMLHttpRequest;

// make a get request
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

// what to do when response is ready
xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        console.log(articles)
        articles.length <= 20;
        let newsHTML = "";
        articles.forEach((element,index) => {
            let newsCards = `
                <div class="card">
                    <div class="card-header" id="${index}">
                        <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">${element.title}</button>
                        </h2>
                    </div>
                
                    <div id="collapse${index}" class="collapse" aria-labelledby="${index}" data-parent="#newsAccordian">
                        <div class="card-body">${element.description} Read more <a href="${element.url}" target="_blank">here</a>.</div>
                    </div>
                </div>`
                newsHTML += newsCards;
        });
        newsAccordian.innerHTML = newsHTML;
    }
    else {
        console.error("Some error occured")
    }
}
console.log(xhr)

// send the request
xhr.send();