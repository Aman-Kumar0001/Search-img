let inputValue = document.getElementById('myInput');

inputValue.addEventListener('keyup', () => {
    const textValue = inputValue.value.toLowerCase();

    const items = document.querySelectorAll('.card');

    items.forEach((items) => {
        const text = items.textContent.toLowerCase();


        items.style.display = text.includes(textValue) ? '' : 'none';
    });
})

