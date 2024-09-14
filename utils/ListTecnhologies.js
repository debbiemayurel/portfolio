const publicImagesPath = '/';

const availableImages = [
    'reactjs.png',
    'nextjs.png',
    'nodejs.png',
    'mysql.png',
    'mongodb.png',
    'typescript.png',
    'github.png',
    'jquery.png',
];

const technologies = availableImages.map(image => ({
  name: image.split('.')[0],
  imagePath: `${publicImagesPath}${image}`
}));

export default technologies;