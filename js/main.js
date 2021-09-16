
$(document).ready(function() {
    
    /* -- Typed.js integration --
    
    Usage: 
        Add the class "typed" to any (empty) element and use a "typed-items"
        tag to with the list of possible phrases.
    
    Example:
        <span class="typed" typed-items="pizza, soda, broccoli"></span>
        
    */
    $(".typed").each(function(i, obj) {
        loop_bool = obj.getAttribute('loop')
        loop_bool = loop_bool === null || loop_bool === "true" ? true : false
        new Typed('.typed', {
            strings: obj.getAttribute('typed-items').split(','),
            typeSpeed: 75,
            backSpeed: 40,
            backDelay: 1000,
            loop: loop_bool     // default to loop if no loop is specified
        });
    });
    
    
    
});