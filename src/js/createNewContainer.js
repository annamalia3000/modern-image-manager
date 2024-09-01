export function createNewImgContainer(id, path, name) {
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
};