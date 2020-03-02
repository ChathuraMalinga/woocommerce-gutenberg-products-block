/**
 * External dependencies
 */
import { apiFetch } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import { ACTION_TYPES as types } from './action-types';

/**
 * Returns an action object used in updating the store with the provided items
 * retrieved from a request using the given querystring.
 *
 * This is a generic response action.
 *
 * @param {Object}   [response={}]    An object containing the response from the
 *                                    request.
 * @return {Object} Object for action.
 */
export function receiveCart( response = {} ) {
	return {
		type: types.RECEIVE_CART,
		response,
	};
}

/**
 * Returns an action object used for receiving customer facing errors from the
 * API.
 *
 * @param {Object}  [error={}]     An error object containing the error message
 *                                 and response code.
 * @param {boolean} [replace=true] Should existing errors be replaced, or should
 *                                 the error be appended.
 * @return {Object} Object for action.
 */
export function receiveError( error = {}, replace = true ) {
	return {
		type: replace ? types.REPLACE_ERRORS : types.RECEIVE_ERROR,
		error,
	};
}

/**
 * Returns an action object used to track when a coupon is applying.
 *
 * @param {string} [couponCode] Coupon being added.
 * @return {Object} Object for action.
 */
export function receiveApplyingCoupon( couponCode ) {
	return {
		type: types.APPLYING_COUPON,
		couponCode,
	};
}

/**
 * Returns an action object used to track when a coupon is removing.
 *
 * @param {string} [couponCode] Coupon being removed.
 * @return {Object} Object for action.
 */
export function receiveRemovingCoupon( couponCode ) {
	return {
		type: types.REMOVING_COUPON,
		couponCode,
	};
}

/**
 * Applies a coupon code and either invalidates caches, or receives an error if
 * the coupon cannot be applied.
 *
 * @param {string} couponCode The coupon code to apply to the cart.
 */
export function* applyCoupon( couponCode ) {
	yield receiveApplyingCoupon( couponCode );

	try {
		const result = yield apiFetch( {
			path: '/wc/store/cart/apply-coupon',
			method: 'POST',
			data: {
				code: couponCode,
			},
			cache: 'no-store',
		} );

		if ( result ) {
			yield receiveCart( result );
		}
	} catch ( error ) {
		yield receiveError( error );
	}

	yield receiveApplyingCoupon( '' );
}

/**
 * Removes a coupon code and either invalidates caches, or receives an error if
 * the coupon cannot be removed.
 *
 * @param {string} couponCode The coupon code to remove from the cart.
 */
export function* removeCoupon( couponCode ) {
	yield receiveRemovingCoupon( couponCode );

	try {
		const result = yield apiFetch( {
			path: '/wc/store/cart/remove-coupon',
			method: 'POST',
			data: {
				code: couponCode,
			},
			cache: 'no-store',
		} );

		if ( result ) {
			yield receiveCart( result );
		}
	} catch ( error ) {
		yield receiveError( error );
	}

	yield receiveRemovingCoupon( '' );
}

/**
 * Returns an action object to indicate if the specified cart item
 * is being updated; i.e. removing, or changing quantity.
 *
 * @param {string} cartItemKey Cart item being updated.
 * @param {boolean} isQuantityPending Flag for update state; true if API request is pending.
 * @return {Object} Object for action.
 */
export function itemQuantityPending( cartItemKey, isQuantityPending ) {
	return {
		type: types.ITEM_QUANTITY_PENDING,
		cartItemKey,
		isQuantityPending,
	};
}

/**
 * Returns an action object to remove a cart item from the store.
 *
 * @param {string} cartItemKey Cart item to remove.
 * @return {Object} Object for action.
 */
export function receiveRemovedItem( cartItemKey ) {
	return {
		type: types.RECEIVE_REMOVED_ITEM,
		cartItemKey,
	};
}

/**
 * Removes specified item from the cart:
 * - Calls API to remove item.
 * - If successful, yields action to remove item from store.
 * - If error, yields action to store error.
 * - Sets cart item as pending while API request is in progress.
 *
 * @param {string} cartItemKey Cart item being updated.
 */
export function* removeItemFromCart( cartItemKey ) {
	yield itemQuantityPending( cartItemKey, true );

	try {
		yield apiFetch( {
			path: `/wc/store/cart/items/${ cartItemKey }`,
			method: 'DELETE',
			cache: 'no-store',
		} );

		const cart = yield apiFetch( {
			path: `/wc/store/cart`,
			method: 'GET',
			cache: 'no-store',
		} );

		yield receiveCart( cart );
	} catch ( error ) {
		yield receiveError( error );
	}

	yield itemQuantityPending( cartItemKey, false );
}
