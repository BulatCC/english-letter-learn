import {iosVhFix} from './utils/ios-vh-fix';
import {randomLetter} from './modules/random-letter';
import {checkLetter} from './modules/check-letter';

window.letter = null;

// Utils
// ---------------------------------

iosVhFix();

// Modules
// ---------------------------------


randomLetter();
checkLetter();
