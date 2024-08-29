const baseURL = 'http://localhost:3000';

export async function loadExistingImages() {
    try {
        const response = await fetch(`${baseURL}/files`);
        const { files } = await response.json();

        files.forEach(file => {
            createNewImgContainer(file.id, file.path, file.name);
        });
    } catch (error) {
        console.error(error);
    }
};