const dndContainer = document.querySelector('.dnd-container');
const imgInput = document.querySelector('.input-img');
const images = document.querySelector('.images');
let preImgContainer = document.querySelector('.preimg-container');

dndContainer.addEventListener('click', () => {
    imgInput.dispatchEvent(new MouseEvent('click'));
});

const createNewImgContainer = (imgSrc) => {
    const newImgContainer = document.createElement('div');
    newImgContainer.classList.add('img-container');

    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.classList.add('image');

    const newButton = document.createElement('button');
    newButton.classList.add('remove-img-btn', 'img-btn');
    newButton.textContent = 'X';

    newImgContainer.appendChild(imgElement);
    newImgContainer.appendChild(newButton);

    preImgContainer.insertAdjacentElement('beforebegin', newImgContainer);
};

const displayImg = (file) => {
    const reader = new FileReader(); 

    reader.onload = (e) => {
        createNewImgContainer(e.target.result);
        checkImageCount();
    };

    reader.readAsDataURL(file);
};

const canAddMoreImages = () => {
    const imagesCount = document.querySelectorAll('.image').length;
    return imagesCount < 10;
};

const checkImageCount = () => { 
    const imagesCount = document.querySelectorAll('.image').length;
    if (imagesCount >= 10 && preImgContainer) {
        preImgContainer.remove();
        preImgContainer = null;
    } else if (imagesCount < 10 && !preImgContainer) { 
        preImgContainer = document.createElement('div');
        preImgContainer.classList.add('preimg-container');

        const preImg = document.createElement('div');
        preImg.classList.add('pre-img');
        
        const preButton = document.createElement('button');
        preButton.classList.add('img-btn');
        preButton.textContent = 'X';

        preImgContainer.appendChild(preImg);
        preImgContainer.appendChild(preButton);
        images.appendChild(preImgContainer);
    }
};

imgInput.addEventListener('change', (e) => {
    const files = e.target.files;
    if (canAddMoreImages()) {
        Array.from(files).forEach((file) => {
            if (canAddMoreImages()) {
                displayImg(file);
            }
        });
    }
});

dndContainer.addEventListener('drop', (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    if (canAddMoreImages()) {
        Array.from(files).forEach((file) => {
            if (canAddMoreImages()) {
                displayImg(file);
            }
        });
    }
});

dndContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
});

images.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-img-btn')) {
        const imgContainer = e.target.closest('.img-container');
        imgContainer.remove();
        checkImageCount();
    }
});
