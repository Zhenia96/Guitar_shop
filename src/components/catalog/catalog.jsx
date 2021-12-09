import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Sorting from './components/sorting/sorting';
import CatalogCard from './components/catalog-card/catalog-card';
import Filter from './components/filter/filter';
import useFilter from './hooks/use-filter/use-filter';
import useSorting from './hooks/use-sorting/use-sorting';
import Pagination from './components/pagination/pagination';
import { getInitialProducts } from '../../store/products/selectors';
import { sortProducts, filterProducts, getPageCount } from './utils';
import { PAGE_CARD_LIMIT } from './constants';
import './catalog.scss';

const Catalog = () => {
  const products = useSelector(getInitialProducts);
  const [shownProducts, setShownProducts] = useState(products);
  const [sortingOptions, sortingDispatch] = useSorting();
  const [filterOptions, filterDispatch] = useFilter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const sortedProducts = sortProducts(shownProducts, sortingOptions);
    setShownProducts(sortedProducts);
  }, [sortingOptions]);

  useEffect(() => {
    const filteredProducts = filterProducts(products, filterOptions);
    const sortedProducts = sortProducts(filteredProducts, sortingOptions);
    setCurrentPage(1);
    setShownProducts(sortedProducts);
  }, [filterOptions]);

  return (
    <main className='catalog'>
      <div className='wrapper'>
        <h1 className='catalog__title'>Каталог гитар</h1>
        <Breadcrumbs className='catalog__breadcrumbs' />
        <div className='catalog__grid'>
          <Filter className='catalog__filter' options={filterOptions} dispatch={filterDispatch} products={products} />
          <Sorting className='catalog__sorting' options={sortingOptions} dispatch={sortingDispatch} />
          {
            shownProducts.length
              ? (
                <>
                  <ul className='catalog__products'>
                    {
                      shownProducts
                        .slice((currentPage - 1) * PAGE_CARD_LIMIT, currentPage * PAGE_CARD_LIMIT)
                        .map((product) => (
                          <li key={product.vendorСode}>
                            <CatalogCard product={product} />
                          </li>
                        ))
                    }
                  </ul>
                  <Pagination
                    className='catalog__pagination'
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageCount={getPageCount(shownProducts)}
                  />
                </>
              )
              : ''
          }
        </div>
      </div>
    </main>
  );
};

export default Catalog;
