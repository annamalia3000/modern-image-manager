import { displayImg } from './displayImg';
import { canAddMoreImages } from './canAddMoreImages';

const dndContainer = document.querySelector('.dnd-container');
const imgInput = document.querySelector('.input-img');

imgInput.addEventListener('change', (e) => {
    const files = e.target.files;
    Array.from(files).forEach((file) => {
        if (canAddMoreImages()) {
            displayImg(file).catch(error => {
                console.error('Error uploading image:', error);
            });
        }
    });
});

dndContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    Array.from(files).forEach((file) => {
        if (canAddMoreImages()) {
            displayImg(file).catch(error => {
                console.error('Error uploading image:', error);
            });
        }
    });
});

