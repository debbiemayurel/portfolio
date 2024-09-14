const publicImagesPath = '/projects/work/';

const availableImages = [
    'helpCenter.jpeg',
    'supportCenter.jpeg',
];

const projectsWork = availableImages.map(image => ({
  name: image.split('.')[0],
  imagePath: `${publicImagesPath}${image}`
}));

export default projectsWork;