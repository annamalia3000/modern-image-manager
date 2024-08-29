import { createNewImgContainer } from './createNewContainer';
import { checkImageCount } from './checkImageCount';

const baseURL = 'http://localhost:3000';

export async function displayImg(file) {
    try {
        console.log('Uploading file:', file); 

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${baseURL}/files`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const { file: uploadedFile } = await response.json();
        console.log('Uploaded file:', uploadedFile); 

        createNewImgContainer(uploadedFile.id, uploadedFile.path, uploadedFile.name);
        checkImageCount();
    } catch (error) {
        console.error('Error uploading image:', error);
    }
};
