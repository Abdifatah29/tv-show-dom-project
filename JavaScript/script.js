$.ajax({
    url: "https://api.tvmaze.com/shows/82/episodes",
    type: "GET"
}).done((data) => {
    render(data);
});

function render(episodes) {
    for(let episode in episodes){
        console.log(episodes[episode]['number']);
        $('#root').append("<div class='edisodeBlock'>"
                + "<div class='edisodeHeader'><h3>" + episodes[episode]['name'] + " - S0" + episodes[episode]['season'] + "E0" + episodes[episode]['number'] + "</h3></div>"
                + "<div><img alt='asd' src='" + episodes[episode]['image']['medium'] + "'>"
                +   "<div class='edisodeText'><p>" + episodes[episode]['summary'] + "</p><div>"
                + "</div>"
            + "</div>"
        );
    }
}
