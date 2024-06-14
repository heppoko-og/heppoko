document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function(menuItem) {
        var dropdown = menuItem.querySelector('.dropdown');

        menuItem.addEventListener('mouseenter', function() {
            dropdown.style.display = 'block';
        });

        menuItem.addEventListener('mouseleave', function() {
            dropdown.style.display = 'none';
        });

        dropdown.addEventListener('mouseenter', function() {
            dropdown.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', function() {
            dropdown.style.display = 'none';
        });
    });
});
