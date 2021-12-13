import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PopupSuccess from './components/popup-success/popup-success';
import PopupAdd from './components/popup-add/popup-add';
import PopupDelete from './components/popup-delete/popup-delete';

import { getPopupType } from '../../store/popups/selectors';
import { closePopup } from '../../store/action';
import { PopupType } from '../../constants';

const Popups = () => {
  const popupType = useSelector(getPopupType);
  const dispatch = useDispatch();

  const handlePopupClose = () => {
    dispatch(closePopup());
  };

  return (
    <div className='popups'>
      {
        popupType === PopupType.ADDED_SUCCESSFULLY
          ? <PopupSuccess onClose={handlePopupClose} />
          : null
      }
      {
        popupType === PopupType.ADD_PRODUCT
          ? <PopupAdd onClose={handlePopupClose} />
          : null
      }
      {
        popupType === PopupType.DELETE_PRODUCT
          ? <PopupDelete onClose={handlePopupClose} />
          : null
      }
    </div>
  );
};

export default Popups;
