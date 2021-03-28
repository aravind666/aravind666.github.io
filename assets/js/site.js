$(document).ready(function() {
    $('.move-to-top').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 35) {
            $('.move-to-top').fadeIn();
            $('#navbarHeader').removeClass('show');
        } else {
            $('.move-to-top').fadeOut();
        }
    });

    $('.move-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    const searchTerm = getQueryVariable('query');
    if (searchTerm) {
        document.getElementById('search-box').setAttribute("value", searchTerm);

        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
            this.field('id');
            this.field('category');
            this.field('content');
            for (var key in window.store) { // Add the data to lunr
                this.add({
                    'id': key,
                    'title': window.store[key].title,
                    'category': window.store[key].category,
                    'content': window.store[key].content
                });
            }
        });
        const results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, window.store); // We'll write this in the next section
    }

});

function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');

        if (pair[0] === variable) {
            return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
    }
}


function displaySearchResults(results, store) {
    const searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
        let appendString = '';

        for (let i = 0; i < results.length; i++) {  // Iterate over the results
            const item = store[results[i].ref];
            appendString += '<li class="kesari-link" ><a class="link-to-post" href="' + item.url + '"><h4>' + item.title + '</h4>';
            appendString += '<p class="lead">' + item.content.substring(0, 300) + '...</p></a></li>';
        }

        searchResults.innerHTML = appendString;
    } else {
        searchResults.innerHTML = '<h3 class="kesari-link"> Nothing exists of that sort, which I am aware of, please try again.</h3>';
    }
}