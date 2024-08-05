//your JS code here. If required.
window.onload = function() {
    function findDomLevel(elementId) {
        // Get the target element by id
        const targetElement = document.getElementById(elementId);
        
        // Initialize the level counter
        let level = 0;
        
        // Traverse up the DOM tree until the root element is reached
        let currentElement = targetElement;
        while (currentElement) {
            level++;
            currentElement = currentElement.parentElement;
        }
        
        // Display the result using alert
        alert(`The level of the element is: ${level}`);
    }

    // Call the function with the id of the target element
    findDomLevel('level');
	
};
