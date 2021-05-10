$.ajax({
    url: "https://api.tvmaze.com/shows/82/episodes",
    type: "GET"
}).done((data) => {
    render(data);
});

function render(episodes) {
    for(let episode in episodes){
        console.log(episodes[episode]['summary']);
        $('#root').append("<div class='edisodeBlock'>"
                + "<div><h3>" + episodes[episode]['name'] + "</h3></div>"
                + "<div><img alt='asd' src='" + episodes[episode]['image']['medium'] + "'>"
                +   "<p>" + episodes[episode]['summary'] + "</p>"
                + "</div>"
            + "</div>"
        );
    }
}
