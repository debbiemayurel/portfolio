const publicImagesPath = '/projects/personal/';

const availableImages = [
    'personal.png',
];

const projectsPersonal = availableImages.map(image => ({
  name: image.split('.')[0],
  imagePath: `${publicImagesPath}${image}`
}));

export default projectsPersonal;