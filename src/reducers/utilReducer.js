import { mobileBreakpoint, smallEmAmount, phoneBreakpoint } from "../constants/ui-constants";
import { SCREEN_RESIZE } from '../actions/types';

// Initialize store properties for util reducer
const INITIAL_STATE = {
    screenWidth: typeof window === 'object' ? window.innerWidth : null,
    isMobile: typeof window === 'object' ? window.innerWidth <= mobileBreakpoint : null,
    isPhone: typeof window === 'object' ? window.innerWidth <= phoneBreakpoint && (window.innerWidth / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']) <= smallEmAmount) : null,  
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SCREEN_RESIZE:
      return Object.assign({}, state, {
          screenWidth: action.screenWidth,
          isMobile: action.screenWidth <= mobileBreakpoint,
          isPhone: action.screenWidth <= phoneBreakpoint && (action.screenWidth / parseFloat(getComputedStyle(document.querySelector('body'))['font-size']) <= smallEmAmount)
      });
    default:
      return state;
  }
};
