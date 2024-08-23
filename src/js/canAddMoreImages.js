export function canAddMoreImages() {
    const imagesCount = document.querySelectorAll('.image').length;
    return imagesCount < 10;
};