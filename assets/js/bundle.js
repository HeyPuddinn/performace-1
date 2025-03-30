// jQuery and its plugins
document.addEventListener('DOMContentLoaded', function() {
    // Dynamically load jQuery
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'assets/js/jquery.min.js';
    jqueryScript.onload = function() {
        // Load other scripts after jQuery is loaded
        loadScript('assets/js/jquery.scrolly.min.js', function() {
            loadScript('assets/js/browser.min.js', function() {
                loadScript('assets/js/breakpoints.min.js', function() {
                    loadScript('assets/js/util.js', function() {
                        loadScript('assets/js/main.js', function() {
                            // Initialize main functionality after all scripts are loaded
                            console.log('All scripts loaded successfully');
                        });
                    });
                });
            });
        });
    };
    document.body.appendChild(jqueryScript);
});

// Helper function to load scripts dynamically
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.body.appendChild(script);
} 