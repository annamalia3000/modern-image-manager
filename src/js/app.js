const dndContainer = document.querySelector('.dnd-container');
const imgInput = document.querySelector('.input-img');
const removeButtons = document.querySelectorAll('.remove-img-btn');
const images = document.querySelector('.images');

dndContainer.addEventListener('click', (e) => {
    imgInput.dispatchEvent(new MouseEvent('click'));
});

const displayImg = (file, preImg) => {
    const reader = new FileReader(); 

    reader.onload = (e) => {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.classList.add('image');
        
        preImg.innerHTML = '';
        preImg.classList.remove('pre-img');
        preImg.appendChild(imgElement);
    };

    const newImgContainer = document.createElement('div');
    newImgContainer.classList.add('img-container');

    const newPreImg = document.createElement('div');
    newPreImg.classList.add('pre-img');

    const newButton = document.createElement('button');
    newButton.classList.add('remove-img-btn');
    newButton.textContent ='X';

    newImgContainer.appendChild(newPreImg);
    newImgContainer.appendChild(newButton);
    images.appendChild(newImgContainer);

    reader.readAsDataURL(file);
};

imgInput.addEventListener('change', (e) => {
    const files = e.target.files;
    let preImgs = document.querySelectorAll('.pre-img');

    Array.from(files).forEach((file, index) => {
        if (index < preImgs.length) {
            displayImg(file, preImgs[index]);
        }
    });
});

dndContainer.addEventListener('drop', (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    let preImgs = document.querySelectorAll('.pre-img');

    Array.from(files).forEach((file, index) => {
        if (index < preImgs.length) {
            displayImg(file, preImgs[index]);
        }
    });
});

dndContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
});

images.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-img-btn')) {
        const imgContainer = e.target.closest('.img-container');
        imgContainer.remove();
    }
});