import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { filterAction } from '../../hooks/use-filter/actions';
import { GuitarType } from '../../../../constants';
import {
  getAvailableFilters,
  getStringCounts,
  getStringCountsByTypes,
  removeType,
} from './utils';
import { addSpaceBetweenThousands } from '../../../../utils';
import { productCardType } from '../../../../type-validation';

import './filter.scss';

const Filter = ({
  className, options, dispatch, products,
}) => {
  const availableFilters = useMemo(
    () => (
      getAvailableFilters(products, options)),
    [products, options],
  );
  const [priceLimit, setPriceLimit] = useState({
    first: '',
    second: '',
  });

  const handleFirstPriceLimitInput = (evt) => {
    const price = Number(evt.target.value);
    if (price >= 0 && price <= availableFilters.maxPrice) {
      setPriceLimit({
        ...priceLimit,
        first: price,
      });
    }
  };

  const handleSecondPriceLimitInput = (evt) => {
    const price = Number(evt.target.value);
    if (price >= 0 && price <= availableFilters.maxPrice) {
      setPriceLimit({
        ...priceLimit,
        second: price,
      });
    }
  };

  const handleFirstPriceLimitBlur = () => {
    let price = priceLimit.first;

    if (price < availableFilters.minPrice) {
      price = availableFilters.minPrice;
    }
    if (price !== priceLimit.first) {
      setPriceLimit({
        ...priceLimit,
        first: price,
      });
    }
    dispatch(filterAction.setFirstPriceLimit(price));
    dispatch(filterAction.setSecondPriceLimit(priceLimit.second || availableFilters.maxPrice));
  };

  const handleSecondPriceLimitBlur = () => {
    let price = priceLimit.second;

    if (price < availableFilters.minPrice) {
      price = availableFilters.maxPrice;
    }
    if (price !== priceLimit.second) {
      setPriceLimit({
        ...priceLimit,
        second: price,
      });
    }
    dispatch(filterAction.setFirstPriceLimit(priceLimit.first || availableFilters.minPrice));
    dispatch(filterAction.setSecondPriceLimit(price));
  };

  const handleTypeChange = (evt) => {
    const guitarType = evt.target.value;

    if (options.availableTypes.includes(guitarType)) {
      const types = removeType(options.availableTypes, guitarType);
      const availableStringCounts = getStringCountsByTypes(types);
      const stringCount = getStringCounts(availableStringCounts, options.availableStringCounts);

      dispatch(filterAction.deleteType(guitarType));
      dispatch(filterAction.setStringCounts(stringCount));
    } else {
      const availableStringCounts = getStringCountsByTypes([...options.availableTypes, guitarType]);
      const stringCount = getStringCounts(availableStringCounts, options.availableStringCounts);

      dispatch(filterAction.addType(guitarType));
      dispatch(filterAction.setStringCounts(stringCount));
    }
  };

  const handleStringCountsChange = (evt) => {
    const stringCount = Number(evt.target.value);

    return options.availableStringCounts.includes(stringCount)
      ? dispatch(filterAction.deleteStringCount(stringCount))
      : dispatch(filterAction.addStringCount(stringCount));
  };

  return (
    <section className={`${className} filter`}>
      <h2 className='filter__title'>Фильтр</h2>

      <div className='filter__container'>
        <h3 className='filter__subtitle'>
          Цена,
          {' '}
          <span className='filter__ruble-symbol'>₽</span>
        </h3>

        <div className='filter__row'>
          <input
            onInput={handleFirstPriceLimitInput}
            onBlur={handleFirstPriceLimitBlur}
            className='filter__price-field'
            id='first-price-limit'
            type='text'
            value={priceLimit.first}
            name='firstPriceLimit'
            placeholder={addSpaceBetweenThousands(availableFilters.minPrice)}
          />
          <label className='visually-hidden' htmlFor='first-price-limit'>Минимальная цена</label>
          &mdash;
          <input
            onInput={handleSecondPriceLimitInput}
            onBlur={handleSecondPriceLimitBlur}
            className='filter__price-field'
            id='second-price-limit'
            type='text'
            value={priceLimit.second}
            name='secondPriceLimit'
            placeholder={addSpaceBetweenThousands(availableFilters.maxPrice)}
          />
          <label className='visually-hidden' htmlFor='second-price-limit'>Максимальная цена</label>
        </div>
      </div>
      <div onChange={handleTypeChange} className='filter__container'>
        <h3 className='filter__subtitle'>Тип гитар</h3>

        <input
          className='filter__checkbox-field visually-hidden'
          id='acoustic'
          type='checkbox'
          value={GuitarType.ACOUSTIC}
          readOnly
          name='type'
          checked={options.availableTypes.includes(GuitarType.ACOUSTIC)}
          disabled={!availableFilters.types.includes(GuitarType.ACOUSTIC)}
        />
        <label className='filter__checkbox' htmlFor='acoustic'>Акустические гитары</label>

        <input
          className='filter__checkbox-field visually-hidden'
          id='electric'
          type='checkbox'
          value={GuitarType.ELECTRIC}
          readOnly
          name='type'
          checked={options.availableTypes.includes(GuitarType.ELECTRIC)}
          disabled={!availableFilters.types.includes(GuitarType.ELECTRIC)}
        />
        <label className='filter__checkbox' htmlFor='electric'>Электрогитары</label>

        <input
          className='filter__checkbox-field visually-hidden'
          id='ukulele'
          type='checkbox'
          value={GuitarType.UKULELE}
          readOnly
          name='type'
          checked={options.availableTypes.includes(GuitarType.UKULELE)}
          disabled={!availableFilters.types.includes(GuitarType.UKULELE)}
        />
        <label className='filter__checkbox' htmlFor='ukulele'>Укулеле</label>
      </div>
      <div onChange={handleStringCountsChange} className='filter__container'>
        <h3 className='filter__subtitle'>Количество струн</h3>

        <input
          className='filter__checkbox-field visually-hidden'
          id='four-strings'
          type='checkbox'
          value={4}
          readOnly
          name='stringCount'
          checked={options.availableStringCounts.includes(4)}
          disabled={!availableFilters.stringCounts.includes(4)}
        />
        <label className='filter__checkbox' htmlFor='four-strings'>4</label>

        <input
          className='filter__checkbox-field visually-hidden'
          id='six-strings'
          type='checkbox'
          value={6}
          name='stringCount'
          readOnly
          checked={options.availableStringCounts.includes(6)}
          disabled={!availableFilters.stringCounts.includes(6)}
        />
        <label className='filter__checkbox' htmlFor='six-strings'>6</label>

        <input
          className='filter__checkbox-field visually-hidden'
          id='seven-strings'
          type='checkbox'
          value={7}
          readOnly
          name='stringCount'
          checked={options.availableStringCounts.includes(7)}
          disabled={!availableFilters.stringCounts.includes(7)}
        />
        <label className='filter__checkbox' htmlFor='seven-strings'>7</label>

        <input
          className='filter__checkbox-field visually-hidden'
          id='twelve-strings'
          type='checkbox'
          value={12}
          readOnly
          name='stringCount'
          checked={options.availableStringCounts.includes(12)}
          disabled={!availableFilters.stringCounts.includes(12)}
        />
        <label className='filter__checkbox' htmlFor='twelve-strings'>12</label>
      </div>
    </section>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.shape(productCardType)).isRequired,
  dispatch: PropTypes.func.isRequired,
  options: PropTypes.shape({
    firstPriceLimit: PropTypes.number,
    secondPriceLimit: PropTypes.number,
    availableTypes: PropTypes.arrayOf(PropTypes.string),
    availableStringCounts: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

Filter.defaultProps = {
  className: '',
};

export default React.memo(Filter);
