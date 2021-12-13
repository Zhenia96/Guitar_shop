import { NameSpace } from '../../constants';

const getPopupOptions = (state) => state[NameSpace.POPUPS].popupOptions;

const getPopupType = (state) => state[NameSpace.POPUPS].popupType;

export {
  getPopupOptions,
  getPopupType,
};
