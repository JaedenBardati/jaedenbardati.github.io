
document.addEventListener("DOMContentLoaded", function(event) {
    
    /* -- Typed.js integration --
    
    Usage: 
        Add the class "typed" to any (empty) element and use a "typed-items"
        tag to with the list of possible phrases.
    
    Example:
        <span class="typed" typed-items="pizza, soda, broccoli"></span>
        
    */
    $(".typed").each(function(i, obj) {
        new Typed('.typed', {
            strings: obj.getAttribute('typed-items').split(','),
            typeSpeed: 75,
            backSpeed: 40,
            backDelay: 1000,
            loop: true
        });
    });
    
    
    
});