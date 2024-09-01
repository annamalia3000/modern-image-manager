/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/loadExistingImages .js
const baseURL = 'http://localhost:3000';
async function loadExistingImages() {
  try {
    const response = await fetch(`${baseURL}/files`);
    const {
      files
    } = await response.json();
    files.forEach(file => {
      createNewImgContainer(file.id, file.path, file.name);
    });
  } catch (error) {
    console.error(error);
  }
}
;
;// CONCATENATED MODULE: ./src/js/checkImageCount.js
async function checkImageCount() {
  const imagesCount = document.querySelectorAll('.image').length;
  let preImgContainer = document.querySelector('.preimg-container');
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
}
;
;// CONCATENATED MODULE: ./src/js/removeImg.js

const removeImg_images = document.querySelector('.images');
const removeImg_baseURL = 'http://localhost:3000';
removeImg_images.addEventListener('click', async e => {
  if (e.target.classList.contains('remove-img-btn')) {
    const imgContainer = e.target.closest('.img-container');
    const fileId = imgContainer.dataset.id;
    try {
      const response = await fetch(`${removeImg_baseURL}/files/${fileId}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete image');
      }
      imgContainer.remove();
      checkImageCount();
    } catch (error) {
      console.error(error);
    }
  }
});
;// CONCATENATED MODULE: ./src/js/createNewContainer.js
function createNewContainer_createNewImgContainer(id, path, name) {
  let preImgContainer = document.querySelector('.preimg-container');
  const newImgContainer = document.createElement('div');
  newImgContainer.classList.add('img-container');
  newImgContainer.dataset.id = id;
  const imgElement = document.createElement('img');
  imgElement.src = path;
  imgElement.dataset.name = name;
  imgElement.classList.add('image');
  const newButton = document.createElement('button');
  newButton.classList.add('remove-img-btn', 'img-btn');
  newButton.textContent = 'X';
  newImgContainer.appendChild(imgElement);
  newImgContainer.appendChild(newButton);
  preImgContainer.insertAdjacentElement('beforebegin', newImgContainer);
}
;
;// CONCATENATED MODULE: ./src/js/displayImg.js


const displayImg_baseURL = 'http://localhost:3000';
async function displayImg(file) {
  try {
    console.log('Uploading file:', file);
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${displayImg_baseURL}/files`, {
      method: 'POST',
      body: formData
    });
    if (!response.ok) {
      throw new Error('Failed to upload image');
    }
    const {
      file: uploadedFile
    } = await response.json();
    console.log('Uploaded file:', uploadedFile);
    createNewContainer_createNewImgContainer(uploadedFile.id, uploadedFile.path, uploadedFile.name);
    checkImageCount();
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}
;
;// CONCATENATED MODULE: ./src/js/canAddMoreImages.js
function canAddMoreImages() {
  const imagesCount = document.querySelectorAll('.image').length;
  return imagesCount < 10;
}
;
;// CONCATENATED MODULE: ./src/js/addImg.js


const dndContainer = document.querySelector('.dnd-container');
const imgInput = document.querySelector('.input-img');
imgInput.addEventListener('change', e => {
  const files = e.target.files;
  Array.from(files).forEach(file => {
    if (canAddMoreImages()) {
      displayImg(file).catch(error => {
        console.error('Error uploading image:', error);
      });
    }
  });
});
dndContainer.addEventListener('drop', e => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  Array.from(files).forEach(file => {
    if (canAddMoreImages()) {
      displayImg(file).catch(error => {
        console.error('Error uploading image:', error);
      });
    }
  });
});
;// CONCATENATED MODULE: ./src/js/app.js



loadExistingImages();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map