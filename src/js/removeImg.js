import { checkImageCount } from './checkImageCount';
const images = document.querySelector('.images');

images.addEventListener('click', async (e) => {
    if (e.target.classList.contains('remove-img-btn')) {
        const imgContainer = e.target.closest('.img-container');
        const fileId = imgContainer.dataset.id;

        try {
            const response = await fetch(`http://localhost:3000/files/${fileId}`, {
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