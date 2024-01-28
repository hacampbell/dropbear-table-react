import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import providers from "../utils/osmProviders";
import MenuItemCard from "../components/MenuItems/MenuItemCard/MenuItemCard";
import MenuItemDialog from "../components/MenuItems/MenuItemDialog/MenuItemDialog";
import DisplayMap from "../components/Map/DisplayMap";

const ViewRestaurant = () => {
    return (
        <Box sx={{ alignContent: 'center', padding: "0 1%" }}>
            <Typography variant="h2" align="center" sx={{ padding: "2rem 2rem 0.5rem 2rem", margin: "1rem" }}>Manage Restaurant</Typography>

            {/* Left hand panel for displaying restaurant details */}
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ height: "80vh" }}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>Details</Typography>

                    <Box component="form" sx={{ '& .MuiTextField-root': { marginBottom: "1rem" } }}>
                        <TextField
                            id="restaurant-name"
                            label="Restaurant Name"
                            sx={{ width: "100%" }}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue="Pierpoint London"
                        />

                        <TextField
                            id="restaurant-manager"
                            label="Manager"
                            sx={{ width: "100%" }}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue="Hilary Wyndham"
                        />

                        <TextField
                            id="restaurant-chef"
                            label="Chef"
                            sx={{ width: "100%" }}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue="Harper Stern"
                        />

                        <TextField
                            id="restaurant-budget"
                            type="number"
                            label="Budget"
                            InputProps={{
                                inputProps: {
                                    min: 0,
                                    readOnly: true
                                }
                            }}
                            sx={{ width: "100%" }}
                            defaultValue={1000}
                        />

                        <TextField
                            id="restaurant-lat"
                            type="number"
                            label="Lat"
                            sx={{ width: "49.5%", marginRight: "1%" }}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={-1000.00}
                        />

                        <TextField
                            id="restaurant-long"
                            type="number"
                            label="Long"
                            sx={{ width: "49.5%" }}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={1000.00}
                        />

                        <TextField
                            multiline
                            id="restaurant-description"
                            label="Description"
                            sx={{ width: "100%" }}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio, necessitatibus facilis nisi ducimus quasi numquam fuga voluptates. Quisquam non, deserunt excepturi placeat dolor pariatur, porro labore officiis voluptate quia voluptatem itaque facilis quam cumque animi nihil recusandae praesentium explicabo ipsa corrupti temporibus qui adipisci reprehenderit. Itaque accusamus ducimus eligendi suscipit labore dolorum distinctio laudantium numquam deserunt! Ratione, enim at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio, necessitatibus facilis nisi ducimus quasi numquam fuga voluptates. Quisquam non, deserunt excepturi placeat dolor pariatur, porro labore officiis voluptate quia voluptatem itaque facilis quam cumque animi nihil recusandae praesentium explicabo ipsa corrupti temporibus qui adipisci reprehenderit. Itaque accusamus ducimus eligendi suscipit labore dolorum distinctio laudantium numquam deserunt! Ratione, enim at."
                        />
                    </Box>
                </Grid>

                {/* Middle Panel is for menu items */}
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>Menu Items</Typography>

                    <Container sx={{marginBottom: "1rem", marginLeft: 0}}>
                         <MenuItemDialog />
                    </Container>

                    <Grid container spacing={2}>
                        <MenuItemCard name="Full English Breakfast" subtitle="As seen on harpers desk in S1E1" activeStep={0} />
                        <MenuItemCard name="Chicken Shawarma" subtitle="Another Harper favourite" activeStep={1} />
                        <MenuItemCard name="Salad With Crutons" subtitle="Don't forget the crutons; Kenny has a passion for them" activeStep={3} />
                    </Grid>
                </Grid>

                {/* Right Panel is for specific details on menu items */}
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ height: "80vh" }}>
                    <Typography variant="h4" sx={{ textAlign: "center" }}>Menu Item Details</Typography>

                    {/* Wrap map component in a box so we can define a height for it */}
                    <Box sx={{ width: "100%", height: "40%" }}>
                        <DisplayMap position={{lat: 51.505, lng: -0.09}} zoom={13} provider={providers.OpenStretMaps}/>
                    </Box>

                    <Box component="form" sx={{ '& .MuiTextField-root': { marginTop: "2rem" } }}>
                        <TextField
                            id="menu-item-name"
                            label="Menu Item Name"
                            sx={{ width: "100%" }}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue="Lorem ipsum"
                        />

                        <TextField
                            multiline
                            id="menu-item-description"
                            label="Description"
                            sx={{ width: "100%" }}
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio, necessitatibus facilis nisi ducimus quasi numquam fuga voluptates. Quisquam non, deserunt excepturi placeat dolor pariatur, porro labore officiis voluptate quia voluptatem itaque facilis quam cumque animi nihil recusandae praesentium explicabo ipsa corrupti temporibus qui adipisci reprehenderit. Itaque accusamus ducimus eligendi suscipit labore dolorum distinctio laudantium numquam deserunt! Ratione, enim at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio, necessitatibus facilis nisi ducimus quasi numquam fuga voluptates. Quisquam non, deserunt excepturi placeat dolor pariatur, porro labore officiis voluptate quia voluptatem itaque facilis quam cumque animi nihil recusandae praesentium explicabo ipsa corrupti temporibus qui adipisci reprehenderit. Itaque accusamus ducimus eligendi suscipit labore dolorum distinctio laudantium numquam deserunt! Ratione, enim at."
                        />
                    </Box>

                    <Box sx={{ marginTop: "2rem" }}>
                        <Button variant="contained" size="large" color="success">
                            Approve
                        </Button>

                        <Button variant="contained" size="large" color="error" sx={{ marginLeft: "1rem" }}>
                            Reject
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ViewRestaurant;