import { createNewImgContainer } from './createNewContainer';
import { checkImageCount } from './checkImageCount';

export async function displayImg(file) {
    try {
        console.log('Uploading file:', file); // Логируем файл для проверки

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:3000/files', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const { file: uploadedFile } = await response.json();
        console.log('Uploaded file:', uploadedFile); // Логируем загруженный файл

        createNewImgContainer(uploadedFile.id, uploadedFile.path, uploadedFile.name);
        checkImageCount();
    } catch (error) {
        console.error('Error uploading image:', error);
    }
};
