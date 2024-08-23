export async function checkImageCount() { 
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