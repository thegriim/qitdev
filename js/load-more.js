document.addEventListener('DOMContentLoaded', function() {
  const loadMoreButton = document.querySelector('.more-link');
  
  loadMoreButton.addEventListener('click', function(event) {
      event.preventDefault();

      // Create a preloader element
      const preloader = document.createElement('div');
      preloader.className = 'preloader';
      
      // Add animation span
      const loadingText = document.createElement('span');
      loadingText.textContent = 'Loading';
      preloader.appendChild(loadingText);
      
      // Add animated dots
      for (let i = 0; i < 3; i++) {
          const dot = document.createElement('span');
          dot.className = 'dot';
          preloader.appendChild(dot);
      }
      
      // Replace the button text with the preloader
      loadMoreButton.textContent = '';
      loadMoreButton.appendChild(preloader);

      // After 10 seconds, change the text to "More Coming Soon" with an emoji
      setTimeout(function() {
          loadMoreButton.removeChild(preloader);
          loadMoreButton.textContent = 'More Coming Soon ⏳';
      }, 3000); // 10 seconds
  });
});

