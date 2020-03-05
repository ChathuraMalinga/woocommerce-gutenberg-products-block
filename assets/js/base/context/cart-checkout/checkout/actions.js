/**
 * Internal dependencies
 */
import { TYPES } from './constants';

const {
	SET_PRISTINE,
	SET_PROCESSING,
	SET_REDIRECT_URL,
	SET_COMPLETE,
	SET_HAS_ERROR,
	SET_NO_ERROR,
	INCREMENT_CALCULATING,
	DECREMENT_CALCULATING,
} = TYPES;

export const actions = {
	setPristine: () => ( {
		type: SET_PRISTINE,
	} ),
	setProcessing: () => ( {
		type: SET_PROCESSING,
	} ),
	setRedirectUrl: ( url ) => ( {
		type: SET_REDIRECT_URL,
		url,
	} ),
	setComplete: () => ( {
		type: SET_COMPLETE,
	} ),
	setHasError: () => ( {
		type: SET_HAS_ERROR,
	} ),
	clearError: () => ( {
		type: SET_NO_ERROR,
	} ),
	incrementCalculating: () => ( {
		type: INCREMENT_CALCULATING,
	} ),
	decrementCalculating: () => ( {
		type: DECREMENT_CALCULATING,
	} ),
};