import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import RestaurantCard from "../components/RestaurantCard/RestaurantCard";
import { Add, NoteAdd } from "@mui/icons-material";

const Dashboard = () => {
    return (
        <Box sx={{alignContent: 'center', padding: "0 5%"}}>
            <Typography variant="h2" align="center" sx={{padding: "2rem"}}>Dashboard</Typography>

            {/* Buttons for creating from scratch, and from template */}
            <Box sx={{marginBottom: "1rem"}}>
                <Tooltip title="Create New Restaurant">
                    <IconButton href="/restaurant">
                        <Add />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Create New Restaurant from Template">
                    <IconButton size="large">
                        <NoteAdd />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* Grid layout for entry cards */}
            <Grid container spacing={5}>
                <RestaurantCard name="Dorsia" activeStep={0} manager="Lorem ipsum" totalOrders={10} completeOrders={5} />
                <RestaurantCard name="The Three Broomsticks" activeStep={2} manager="Lorem ipsum" totalOrders={10} completeOrders={1} />
                <RestaurantCard name="The Leaky Cauldron" activeStep={1} manager="Lorem ipsum" totalOrders={10} completeOrders={6} />
                <RestaurantCard name="JJ's Diner" activeStep={1} manager="Lorem ipsum" totalOrders={10} completeOrders={3} />
                <RestaurantCard name="Gus's Galaxy Grill" activeStep={2} manager="Lorem ipsum" totalOrders={10} completeOrders={9} />
                <RestaurantCard name="Freddy's BBQ Joint" activeStep={0} manager="Lorem ipsum" totalOrders={10} completeOrders={7} />
            </Grid>
        </Box>
    );
}

export default Dashboard;