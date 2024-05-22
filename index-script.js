/*
 * Haadi Malik
 * file: index-script.js
 * for: index.html
*/

/* ------------ MODAL START --------------*/

// Get the modals
var modals = document.querySelectorAll(".album-modal");

// Get the <span> elements that close the modals
var spans = document.querySelectorAll(".close");

// Function to close the modal
function closeModal() {
    this.parentElement.parentElement.style.display = "none";
}

// Assign closeModal function to close spans
spans.forEach(function(span) {
    span.onclick = closeModal;
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target.classList.contains("album-modal")) {
            modal.style.display = "none";
        }
    });
};

// Get the album cover images
var albumCovers = document.querySelectorAll(".album-item img");

// Add a click event listener to each album cover image
albumCovers.forEach(function(albumCover, index) {
    albumCover.addEventListener("click", function() {
        // Display the corresponding modal
        var modal = document.getElementById("albumModal" + (index + 1));
        modal.style.display = "block";
    });
});

/* ------------ MODAL END --------------*/


/* ------------ AUDIO START --------------*/

// Load the YouTube iframe API asynchronously
function loadYoutubeScript() {
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

var players = {};

function onYouTubeIframeAPIReady() {
    var tracks = document.querySelectorAll('.album-tracks li');

    tracks.forEach(function(track) {
        track.addEventListener('click', function() {
            var videoId = this.dataset.video;

            if (!videoId) return;

            // Stop other players
            for (var id in players) {
                if (players[id] && typeof players[id].stopVideo === 'function') {
                    players[id].stopVideo();
                }
            }

            // Create a new player
            var player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: videoId,
                events: {
                    'onReady': function(event) {
                        event.target.playVideo();
                    }
                }
            });

            // Store the player
            players[videoId] = player;
        });
    });
}

/* ------------ AUDIO END --------------*/
