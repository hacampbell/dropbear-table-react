import { Box, Grid, LinearProgress, Link, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import providers from '../../utils/osmProviders';
import DisplayMap from '../Map/DisplayMap';

type RestaurantCardProps = {
    name: string;
    manager: string;
    activeStep: number;
    totalOrders: number;
    completeOrders: number;
}

const restaurantLocation = { lat: 51.505, lng: -0.09 }; // If we had a backend we'd get this dynamically
const steps = ['Created', 'Orderd', 'Cooking', 'Served'];

const RestaurantCard = (props: RestaurantCardProps) => {
    return (
        <Grid item xs={12} xl={3}>
            <Link href="/viewrestaurant" underline="none"> {/* This link is smoke and mirrors. Needs updating later */}
                <Paper elevation={6} sx={{ height: "100%" }}>
                    <Box sx={{ width: "100%", height: "20rem" }}>
                        <DisplayMap provider={providers.OpenStretMaps} zoom={13} position={restaurantLocation}/>
                    </Box>

                    <Typography variant='h6' component="h3" sx={{ padding: "0% 3%" }}>{props.name}</Typography>
                    <Typography variant='subtitle2' sx={{ padding: "0% 3% 3% 3%" }}>{props.manager}</Typography>

                    <Stepper activeStep={props.activeStep} sx={{ padding: "0 0 5% 0" }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <LinearProgress variant="determinate" value={props.completeOrders / props.totalOrders * 100} />

                </Paper>
            </Link>
        </Grid>
    );
}

export default RestaurantCard;