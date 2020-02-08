import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import FuseNavHorizontalCollapse from './horizontal/FuseNavHorizontalCollapse';
import FuseNavHorizontalGroup from './horizontal/FuseNavHorizontalGroup';
import FuseNavHorizontalItem from './horizontal/FuseNavHorizontalItem';
import FuseNavHorizontalLink from './horizontal/FuseNavHorizontalLink';
import FuseNavVerticalCollapse from './vertical/FuseNavVerticalCollapse';
import FuseNavVerticalGroup from './vertical/FuseNavVerticalGroup';
import FuseNavVerticalItem from './vertical/FuseNavVerticalItem';
import FuseNavVerticalLink from './vertical/FuseNavVerticalLink';

const useStyles = makeStyles(theme => ({
	navigation: {
		'& .list-item': {
			'&:hover': {
				backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,.04)'
			},
			'&:focus:not(.active)': {
				backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0,0,0,.05)'
			}
		}
	},
	verticalNavigation: {
		'&.active-square-list': {
			'& .list-item, & .active.list-item': {
				width: '100%',
				borderRadius: '0'
			}
		},
		'&.dense': {
			'& .list-item': {
				paddingTop: 0,
				paddingBottom: 0,
				height: 32
			}
		}
	},
	horizontalNavigation: {
		'&.active-square-list': {
			'& .list-item': {
				borderRadius: '0'
			}
		},
		'& .list-item': {
			padding: '8px 12px 8px 12px',
			height: 40,
			minHeight: 40,
			'&.level-0': {
				height: 44,
				minHeight: 44
			},
			'& .list-item-text': {
				padding: '0 0 0 8px'
			}
		}
	},
	'@global': {
		'.popper-navigation-list': {
			'& .list-item': {
				padding: '8px 12px 8px 12px',
				height: 40,
				minHeight: 40,
				'& .list-item-text': {
					padding: '0 0 0 8px'
				}
			},
			'&.dense': {
				'& .list-item': {
					minHeight: 32,
					height: 32,
					'& .list-item-text': {
						padding: '0 0 0 8px'
					}
				}
			}
		}
	}
}));

function FuseNavigation(props) {
	const classes = useStyles(props);
	const { navigation, layout, active, dense, className } = props;

	const verticalNav = (
		<List
			className={clsx(
				'navigation whitespace-no-wrap',
				classes.navigation,
				classes.verticalNavigation,
				`active-${active}-list`,
				dense && 'dense',
				className
			)}
		>
			{navigation.map(item => (
				<React.Fragment key={item.id}>
					{item.type === 'group' && <FuseNavVerticalGroup item={item} nestedLevel={0} />}

					{item.type === 'collapse' && <FuseNavVerticalCollapse item={item} nestedLevel={0} />}

					{item.type === 'item' && <FuseNavVerticalItem item={item} nestedLevel={0} />}

					{item.type === 'link' && <FuseNavVerticalLink item={item} nestedLevel={0} />}

					{item.type === 'divider' && <Divider className="my-16" />}
				</React.Fragment>
			))}
		</List>
	);

	const horizontalNav = (
		<List
			className={clsx(
				'navigation whitespace-no-wrap flex p-0',
				classes.navigation,
				classes.horizontalNavigation,
				`active-${active}-list`,
				dense && 'dense',
				className
			)}
		>
			{navigation.map(item => (
				<React.Fragment key={item.id}>
					{item.type === 'group' && <FuseNavHorizontalGroup item={item} nestedLevel={0} dense={dense} />}

					{item.type === 'collapse' && (
						<FuseNavHorizontalCollapse item={item} nestedLevel={0} dense={dense} />
					)}

					{item.type === 'item' && <FuseNavHorizontalItem item={item} nestedLevel={0} dense={dense} />}

					{item.type === 'link' && <FuseNavHorizontalLink item={item} nestedLevel={0} dense={dense} />}

					{item.type === 'divider' && <Divider className="my-16" />}
				</React.Fragment>
			))}
		</List>
	);

	if (navigation.length > 0) {
		switch (layout) {
			case 'horizontal': {
				return horizontalNav;
			}
			case 'vertical':
			default: {
				return verticalNav;
			}
		}
	} else {
		return null;
	}
}

FuseNavigation.propTypes = {
	navigation: PropTypes.array.isRequired
};

FuseNavigation.defaultProps = {
	layout: 'vertical'
};

export default React.memo(FuseNavigation);
