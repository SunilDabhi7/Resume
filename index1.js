var object = document.querySelectorAll('.nav-menu a');

for (const iterator of object) {
    iterator.addEventListener('click', function(event) {
        event.preventDefault();
        var targetID = this.textContent.trim().toLowerCase();
        var target = document.getElementById(targetID);
        var interval = setInterval(function() {
            var targetCoordinates = target.getBoundingClientRect();
            if (targetCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        }, 20);
    });
}

// Extra from lecture video
// to know the current position of scroll in page, use window.pageYOffset or pageXOffset
