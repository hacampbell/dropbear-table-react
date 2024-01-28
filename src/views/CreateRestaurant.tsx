import { Box, Button, Grid, IconButton, MenuItem, TextField, Tooltip, Typography } from "@mui/material";
import { AddLocationAlt } from "@mui/icons-material";
import providers from "../utils/osmProviders"
import DisplayMap from "../components/Map/DisplayMap";

const managers = [
    { value: "Frank Underwood", label: "Frank Underwood" },
    { value: "Harry Potter", label: "Harry Potter" },
    { value: "Ron Swanson", label: "Ron Swanson" },
    { value: "Harper Stern", label: "Harper Stern" },
];

const CreateRestaurant = () => {
    return (
        <Box sx={{ alignContent: 'center', padding: "0 1%" }}>
            <Typography variant="h2" align="center" sx={{ padding: "2rem 2rem 0.5rem 2rem", margin: "1rem" }}>Create Restaurant</Typography>

            <Grid container spacing={5}>

                {/* Left side of the page for entering details baout the restaurant */}
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ height: "80vh" }}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>Details</Typography>

                    <Box component="form" sx={{ '& .MuiTextField-root': { marginBottom: "1rem" } }}>
                        <TextField
                            required
                            id="restaurant-name"
                            label="Restaurant Name"
                            sx={{ width: "100%" }}
                        />

                        <TextField
                            id="restaurant-manager"
                            select
                            required
                            label="Manager"
                            sx={{ width: "100%" }}
                        >
                            {managers.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            id="restaurant-budget"
                            required
                            type="number"
                            label="Budget"
                            InputProps={{
                                inputProps: {
                                    min: 0
                                }
                            }}
                            sx={{ width: "100%" }}
                        />

                        <TextField
                            id="restaurant-lat"
                            required
                            type="number"
                            label="Lat"
                            sx={{ width: "40%", marginRight: "1rem" }}
                        />

                        <TextField
                            id="restaurant-long"
                            required
                            type="number"
                            label="Long"
                            sx={{ width: "40%", marginRight: "1rem" }}
                        />

                        <Tooltip title="Select Coordinates">
                            <IconButton size="large">
                                <AddLocationAlt sx={{ transform: "scale(1.8)" }} />
                            </IconButton>
                        </Tooltip>

                        <TextField
                            required
                            multiline
                            id="restaurant-description"
                            label="Description"
                            rows={20}
                            sx={{ width: "100%" }}
                        />
                    </Box>

                    <Button variant="contained" size="large" color="primary" href="/viewrestaurant">
                        Create
                    </Button>

                    <Button variant="contained" size="large" color="error" href="/dashboard" sx={{ marginLeft: "1rem" }}>
                        Cancel
                    </Button>
                </Grid>

                {/* Right side is for selecting restaurant location */}
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ height: "80vh" }}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>Location</Typography>
                    <DisplayMap position={{lat: 51.505, lng:-0.09}} zoom={13} provider={providers.OpenStretMaps}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CreateRestaurant;