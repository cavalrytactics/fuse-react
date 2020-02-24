import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
	header: {
		height: 600,
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
		color: theme.palette.primary.contrastText
	},
	cardHeader: {
		backgroundColor: theme.palette.primary[800],
		color: theme.palette.getContrastText(theme.palette.primary[800])
	}
}));

function PricingStyle1Page() {
	const classes = useStyles();

	return (
		<div>
			<div className={clsx(classes.header, 'flex')}>
				<div className="p-24 w-full max-w-2xl mx-auto">
					<div className="text-center my-128 mx-24">
						<FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
							<Typography variant="h2" color="inherit" className="font-light">
								Pricing
							</Typography>
						</FuseAnimate>

						<FuseAnimate duration={400} delay={600}>
							<Typography
								variant="subtitle1"
								color="inherit"
								className="opacity-75 mt-16 mx-auto max-w-512"
							>
								All plans include Unlimited interview invitations, Spectator mode, downloadable reports, and access to all user profiles.
							</Typography>
						</FuseAnimate>
					</div>
				</div>
			</div>

			<div className="-mt-192">
				<div className="w-full max-w-2xl mx-auto">
					<FuseAnimateGroup
						enter={{
							animation: 'transition.slideUpBigIn'
						}}
						className="flex items-center justify-center flex-wrap"
					>
						<div className="w-full max-w-550 sm:w-1/3 p-12">
							<Card square>
								<div className={clsx(classes.cardHeader, 'px-24 py-16')}>
									<Typography variant="subtitle1" color="inherit">
										1 MONTH
									</Typography>
								</div>

								<CardContent className="p-32">
									<div className="flex justify-center">
										<Typography variant="h5" color="textSecondary">
											$
										</Typography>
										<div className="flex items-end">
											<Typography className="text-72 mx-4 font-light leading-none">8,500</Typography>
											<Typography variant="subtitle1" color="textSecondary">
												/ month
											</Typography>
										</div>
									</div>

									<Divider className="my-32" />

									<div className="flex flex-col">
										<Typography variant="subtitle1" className="">
											Billed <span className="font-bold mx-4">$8,500.00</span> every month
										</Typography>
									</div>
								</CardContent>

								<div className="flex justify-center pb-32">
									<Button variant="contained" color="secondary" className="w-128">
										BUY NOW
									</Button>
								</div>
							</Card>
						</div>

						<div className="w-full max-w-550 sm:w-1/3 p-12">
							<Card square>
								<div
									className={clsx(
										classes.cardHeader,
										'flex items-center justify-between px-24 py-16'
									)}
								>
									<Typography variant="subtitle1" color="inherit">
										ANNUAL
									</Typography>
									<Typography variant="caption" color="inherit">
										Save 30%
									</Typography>
								</div>

								<CardContent className="p-32">
									<div className="flex justify-center">
										<Typography variant="h5" color="textSecondary" className="font-medium">
											$
										</Typography>
										<div className="flex items-end">
											<Typography className="text-72 mx-4 font-light leading-none">70,560</Typography>
											<Typography variant="subtitle1" color="textSecondary">
												/ year
											</Typography>
										</div>
									</div>

									<Divider className="my-32" />

									<div className="flex flex-col">
										<Typography variant="subtitle1" className="">
											Billed <span className="font-bold mx-4">$70,560.00</span> every 12 months
										</Typography>
									</div>
								</CardContent>

								<div className="flex justify-center pb-32">
									<Button variant="contained" color="secondary" className="w-128">
										BUY NOW
									</Button>
								</div>
							</Card>
						</div>
					</FuseAnimateGroup>

					<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
						<Typography variant="h4" className="pb-32 font-light">
							Frequently Asked Questions
						</Typography>

						<div className="flex flex-wrap w-full">
							<div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">Is there a free trial?</Typography>
								<Typography className="text-16" color="textSecondary">
									Hosting the infrastructure of the challenges are not free, so we are unable to provide free trials.
								</Typography>
							</div>
							<div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">What does unlimited interview invitations mean?</Typography>
								<Typography className="text-16" color="textSecondary">
									You can invite as many candidates you want to take the challenges.
									This offer is limited per company. 
								</Typography>
							</div>

							<div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">Can I cancel any time?</Typography>
								<Typography className="text-16" color="textSecondary">
									Yes, but you will be charged $400.00 per day if challenge environment has been active for more than 30 minutes. <br/>
									You will receive the difference of the what you paid.
								</Typography>
							</div>

							<div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">What happens after my subscription ended?</Typography>
								<Typography className="text-16" color="textSecondary">
									All reports about your interviews will still be available.<br/>
									You will not be able to invite users or be able to create/modify/start challenges.<br/>
									If you would like to continue your subscription, you can purchase a plan at any time.
								</Typography>
							</div>

							<div className="w-full sm:w-1/2 p-24">
								<Typography className="text-20 mb-8">Can I have a discount?</Typography>
								<Typography className="text-16" color="textSecondary">
									There are no discounts. We believe the product is priced fairly.<br/>
									Successful referral bonuses are normally $5,000 - $10,000 per employee (This is money we never see).<br/>
									Many recruiters use this platform to scale interview process and find the best in the world.
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PricingStyle1Page;
