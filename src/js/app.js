const imgContainer = document.querySelector('.dnd');
const imgInput = document.querySelector('.input-img');
const removeButtons = document.querySelectorAll('.remove-img-btn');

imgContainer.addEventListener('click', (e) => {

    imgInput.dispatchEvent(new MouseEvent('click'));
});

// removeButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         const imgContainer = e.target.closest('.img-container');
//         imgContainer.remove();
//     });
// });