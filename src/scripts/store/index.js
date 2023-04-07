import { createReduxStore, register } from '@wordpress/data';

import { NOTIFY_NAMESPACE } from './constants';
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import * as controls from './controls';
import * as resolvers from './resolvers';

/**
 * @typedef {Object} DashiconsIcon The Dashicons icon type.
 * @property {string} dashicons The Dashicons slug of the icon.
 */

/**
 * @typedef {Object} ImageIcon The image icon type.
 * @property {string} src The url of the image icon.
 */

/**
 * @typedef {Object} SvgIcon The SVG icon type.
 * @property {string} svg The SVG markup of the icon.
 */

/**
 * @typedef {DashiconsIcon|ImageIcon|SvgIcon} NoticeIcon The notification icon type.
 */

/**
 * @typedef {Object} NoticeAction The notification action type.
 * @property {string} acceptLink    The url of the action.
 * @property {string} acceptMessage The message content of the action.
 */

/**
 * @typedef {Object} Notification The notification type.
 * @property {NoticeAction=} action      The optional action associated to the notification.
 * @property {string=}       context     The rendering context of the notification.
 * @property {number}        date        The datetime from which the notification was emitted.
 * @property {boolean}       dismissible Predicate of whether or not the notification can be dismissed.
 * @property {NoticeIcon=}   icon        The optional icon.
 * @property {number}        id          The database id of the notification message.
 * @property {string=}       message     The message content of the notification.
 * @property {string=}       source      The source of the notification.
 * @property {string}        title       The title of the notification message.
 * @property {boolean}       unread      Predicate of whether or not the notification is in an unread state.
 */

/**
 * @typedef {Record<string, Notification[]>} State The notifications redux store type.
 */

/**
 * Creating a store for the redux state.
 *
 * @return {store} A Redux store that lets you read the state, dispatch actions and subscribe to changes.
 */
const store = createReduxStore( NOTIFY_NAMESPACE, {
	reducer,
	actions,
	selectors,
	controls,
	resolvers,
} );

register( store );

export default store;
