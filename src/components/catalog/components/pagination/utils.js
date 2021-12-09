import { SPACE } from './constants';

const getPaginationOptions = (currentPage, pageCount) => {
  const paginationOptions = new Set();
  const firstPage = 1;
  const lastPage = pageCount;
  const prevPage = currentPage - 1 > firstPage ? currentPage - 1 : firstPage;
  const nextPage = currentPage + 1 < lastPage ? currentPage + 1 : lastPage;
  const space = lastPage - nextPage ? SPACE : null;

  paginationOptions.add(firstPage);
  paginationOptions.add(prevPage);
  paginationOptions.add(currentPage);
  paginationOptions.add(nextPage);
  if (space) {
    paginationOptions.add(space);
  }
  paginationOptions.add(lastPage);

  return [...paginationOptions];
};

export {
  getPaginationOptions,
};
