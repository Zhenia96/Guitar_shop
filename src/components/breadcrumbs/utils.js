const getDirectoriesFromPath = (path) => path.replaceAll('/', ' ').trim().split(' ');

export {
  getDirectoriesFromPath,
};
