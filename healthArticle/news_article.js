var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var article = xhr.response.articles;
    var articleDiv = document.getElementById('article')

    newsarticle.forEach(function (articles) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;
        
        var description = document.createElement('p');
        description.textContent = article.description;
        
        var paragraph = document.createElement('h5');
        paragraph.textContent = article.paragraph;

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(paragraph);

        articleDiv.appendChild(articleDiv);
    });
}
xhr.send();