/**
 * Notification UI components
 */
import { clearNotices, removeNotice } from '../reducer';

import { Component } from '@wordpress/element';
import { store } from '../wp-notify';
import { delay } from '../utils';

import Notice from './notification';

// The notification container class
export default class Notifications extends Component {
	state = {
		notifications: [],
	};

	constructor( props ) {
		super( props );
		this.location = this.props.location;
		// watch for state updates
		store.subscribe( () => {
			this.setState( {
				notifications: [
					...store.getState().notifications[ this.location ],
				],
			} );
		} );
	}

	printNotices( notifications ) {
		return notifications.map( ( notify, k ) => (
			<Notice
				{ ...notify }
				key={ k }
				id={ k }
				image={ notify.image || notify.icon }
				onDismiss={ () =>
					delay( 100 ).then( () =>
						store.dispatch(
							removeNotice( {
								location: notify.location,
								key: k,
							} )
						)
					)
				}
			/>
		) );
	}

	noticesList( notifications ) {
		if ( ! notifications.length ) return null;

		// TODO: i've faked the sorting option and whatever argument passed to this component will render a list of notifications splitted by current (the last 7 days) and past (before current)
		const sortedNotifications = notifications.reduce(
			( [ current, past ], item ) => {
				return item.date >= Date.now() / 1000 - 3600 * 24 * 7
					? [ [ ...current, item ], past ]
					: [ current, [ ...past, item ] ];
			},
			[ [], [] ]
		);

		return sortedNotifications ? (
			sortedNotifications.map( ( list, index ) => (
				<section key={ index }>
					{ ! index ? (
						<header>
							<h2>{ list.count } unread notifications</h2>
							<button
								id="clear-all-wp-notify-hub"
								className="wp-notification-action wp-notification-action-markread button-link"
								onClick={ () =>
									store.dispatch(
										clearNotices( this.props.location )
									)
								}
							>
								<span className="ab-icon dashicons-saved"></span>{ ' ' }
								Mark all as read
							</button>
						</header>
					) : (
						<header>
							<h2>Older notifications</h2>
						</header>
					) }
					{ list ? this.printNotices( list ) : null }
				</section>
			) )
		) : (
			<div>
				<h1>Notification Cleared!</h1>
				<h2>Good job 👏</h2>
			</div>
		);
	}

	render() {
		return this.props.splitBy
			? this.noticesList( this.state.notifications ) || null
			: this.printNotices( this.state.notifications );
	}
}
