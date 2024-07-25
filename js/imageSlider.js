document.addEventListener('DOMContentLoaded', function() {
    // Array of image sources
    const images = [
        'img/man1.jpg',
        'img/man2.jpg',
        'img/man4.jpg',
        'img/man5.jpg'
    ];

    // Index to keep track of the current image
    let currentIndex = 0;

    // Interval ID for the image change interval
    let intervalId;

    // Timestamp to track when hover started
    let hoverStartTime = 0;

    // Function to change the image with cross-fade animation
    function changeImage() {
        console.log('Changing image... Current Index:', currentIndex);
        // Get the image element
        const imgElement = document.getElementById('dynamicImage');

        if (imgElement) {
            // Apply cross-fade out animation
            imgElement.classList.add('cross-fade-out');

            // Start the cross-fade in animation slightly before the cross-fade out animation finishes
            setTimeout(() => {
                imgElement.classList.add('cross-fade-in');
                // Change the image source
                imgElement.src = images[currentIndex];

                // Remove cross-fade in class after animation completes
                setTimeout(() => {
                    imgElement.classList.remove('cross-fade-in');
                }, 2000); // Duration of cross-fade in animation (2 seconds)

                // Remove cross-fade out class after animation completes
                setTimeout(() => {
                    imgElement.classList.remove('cross-fade-out');
                }, 2000); // Duration of cross-fade out animation (2 seconds)

                // Update the index
                currentIndex = (currentIndex + 1) % images.length;
            }, 1000); // Start cross-fade in animation after 1 second (halfway through cross-fade out)
        } else {
            console.error('Image element with id "dynamicImage" not found.');
        }
    }

    // Function to start the image change interval
    function startImageChangeInterval() {
        console.log('Starting image change interval...');
        intervalId = setInterval(changeImage, 10000); // Adjusted to 10 seconds
    }

    // Function to stop the image change interval
    function stopImageChangeInterval() {
        console.log('Stopping image change interval...');
        clearInterval(intervalId);
        hoverStartTime = Date.now(); // Record the time when hover started
    }

    // Function to handle hover start
    function handleMouseEnter() {
        console.log('Mouse entered image area...');
        stopImageChangeInterval();
    }

    // Function to handle hover end
    function handleMouseLeave() {
        console.log('Mouse left image area...');
        const currentTime = Date.now();
        const elapsedTime = currentTime - hoverStartTime;
        const remainingTime = 10000 - elapsedTime; // Adjusted to 10 seconds

        // If remaining time is less than or equal to 0, change image immediately
        if (remainingTime <= 0) {
            console.log('Changing image immediately...');
            changeImage();
        } else {
            console.log('Resuming image change in', remainingTime, 'milliseconds...');
            setTimeout(changeImage, remainingTime);
        }
    }

    // Set initial interval
    startImageChangeInterval();

    // Get the image element
    const imgElement = document.getElementById('dynamicImage');

    // Add event listeners for hover and mouseout
    if (imgElement) {
        imgElement.addEventListener('mouseenter', handleMouseEnter);
        imgElement.addEventListener('mouseleave', handleMouseLeave);
    } else {
        console.error('Image element with id "dynamicImage" not found.');
    }

    // Change the image immediately on load
    changeImage();
});


// Get the image element
const imgElement = document.getElementById('dynamicImage');

if (imgElement) {
    // Disable context menu on the image
    imgElement.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent the context menu from appearing
    });

    // Disable dragging on the image
    imgElement.draggable = false;
} else {
    console.error('Image element with id "dynamicImage" not found.');
}

// =========== BLOG SECTION

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-btn');
    const posts = document.querySelectorAll('.post');
    const noResultsMessage = document.getElementById('no-results-message');
    const loadMoreButton = document.getElementById('load-more-btn');
  
    function filterPosts() {
      const query = searchInput.value.toLowerCase();
      let hasResults = false;
  
      posts.forEach(post => {
        const title = post.querySelector('h4 a').textContent.toLowerCase();
  
        if (query === '' || title.includes(query)) {
          post.style.display = '';
          hasResults = true;
        } else {
          post.style.display = 'none';
        }
      });
  
      // Show or hide the "No results found" message and "Load More" button based on whether there are results
      if (!hasResults && query !== '') {
        noResultsMessage.style.display = 'block';
        loadMoreButton.style.display = 'none'; // Hide the "Load More" button
      } else {
        noResultsMessage.style.display = 'none';
        loadMoreButton.style.display = ''; // Show the "Load More" button
      }
    }
  
    searchButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default action of the link
      filterPosts();
    });
  
    // Optional: Filter posts when the user types in the input field
    searchInput.addEventListener('input', filterPosts);
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const postLinks = document.querySelectorAll('.post h4 a');
  
    postLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        // Add the fade-out class to the body or any parent container
        document.body.classList.add('fade-out');
  
        // Delay the navigation to allow the fade-out effect to complete
        setTimeout(() => {
          window.location.href = link.href;
        }, 500); // Match this duration with the transition time in CSS
      });
    });
  });
  