const publicImagesPath = '/projects/work/';

const availableImages = [
    {image:'helpCenter.jpeg', name:'Centro de Ayuda'},
    {image:'supportCenter.jpeg', name:'Centro de Soporte'}
];

const projectsWork = availableImages.map(({ image, name }) => ({
  name,
  imagePath: `${publicImagesPath}${image}`
}));

export default projectsWork;