const $poster = $('#poster');
const $title = $('#title');
const $description = $('#description');
const $release = $('#release');
const $vote = $('#vote');
const $getMovieButton = $('#getMovieButton')


//function that returns movie details
function getMovieDetails(event) {
    event.preventDefault();
    $.ajax ({
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=85f489a18d23ee6fbbd80e344a5a1f4b&language=en-US&&with_genres=27'
    }).then(
        (data) => {
            getMovie(data);
        },
        error => {
            alert('Something went wrong. Blame the smooth brain programmer who made this web application.');
        }
    );
};

function getMovie(data) {
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const details = data.results[randomIndex];
    displayMovieDetails(details);
    
}

const displayMovieDetails = (details) => {
    console.log(details);
    // display movie poster
    $poster.attr('src', `https://image.tmdb.org/t/p/original/${details.poster_path}`);
    $poster.attr('alt', details.original_title);
    
    //display movie title
    $title.text(`Title: ${details.original_title}`);

    //display movie description
    $description.text(`Overview: ${details.overview}`);

    //display release date
    $release.text(`Release Date: ${details.release_date}`);

    //display voter rating
    $vote.text(`Voter Rating: ${details.vote_average}`);
}

$getMovieButton.on('click', getMovieDetails);
// hello