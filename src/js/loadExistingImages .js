export async function loadExistingImages() {
    try {
        const response = await fetch('http://localhost:3000/files');
        const { files } = await response.json();

        files.forEach(file => {
            createNewImgContainer(file.id, file.path, file.name);
        });
    } catch (error) {
        console.error(error);
    }
};