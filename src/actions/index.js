/* import the dependency below when needed for Promise-based HTTP Requests (presuming window reference is not accessible in this actions definition file) */
// import axios from 'axios'; 
import { SCREEN_RESIZE } from './types';

export const screenResize = width => dispatch => dispatch({
    type: SCREEN_RESIZE,
    screenWidth: width
});