document.getElementById('eldiv').addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Hola! Soy el div');
});
