import { Box, Grid, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import providers from "../../../utils/osmProviders";
import DisplayMap from "../../Map/DisplayMap";

type MenuItemCardProps = {
    name: string;
    subtitle: string,
    activeStep: number;
}

const itemLocation = { lat: 51.505, lng: -0.09 }; // If we had a backend we'd get this dynamically
const steps = ['Requested', 'Approved', 'Served'];

const MenuItemCard = (props: MenuItemCardProps) => {
    return (
        <Grid item xs={12} xl={6}>
            {/* I can't be bothered adding picture this early in development. Just throw the map in there for now */}
            <Paper elevation={6} sx={{ height: "100%" }}>
                <Box sx={{ width: "100%", height: "20rem" }}>
                    <DisplayMap position={itemLocation} zoom={13} provider={providers.OpenStretMaps} />
                </Box>

                <Typography variant='h6' sx={{ padding: "0% 3%" }}>{props.name}</Typography>
                <Typography variant='subtitle2' sx={{ padding: "0% 3% 3% 3%" }}>{props.subtitle}</Typography>

                <Stepper activeStep={props.activeStep} sx={{ padding: "0 0 5% 0" }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Paper>
        </Grid>
    );
}

export default MenuItemCard;