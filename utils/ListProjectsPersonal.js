const publicImagesPath = '/projects/personal/';

const availableImages = [
    {image:'portfolio.jpeg', name:'Portfolio'},{image:'portfolio.jpeg', name:'Portfolio'},
];

const projectsPersonal = availableImages.map(({ image, name }) => ({
    name,
    imagePath: `${publicImagesPath}${image}`
}));

export default projectsPersonal;