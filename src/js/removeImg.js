import { checkImageCount } from './checkImageCount';
const images = document.querySelector('.images');
const baseURL = 'http://localhost:3000';

images.addEventListener('click', async (e) => {
    if (e.target.classList.contains('remove-img-btn')) {
        const imgContainer = e.target.closest('.img-container');
        const fileId = imgContainer.dataset.id;

        try {
            const response = await fetch(`${baseURL}/files/${fileId}`, {
                method: 'DELETE',
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