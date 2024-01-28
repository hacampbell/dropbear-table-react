import { Add } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import React from "react";
import providers from "../../../utils/osmProviders";
import DataTable from "../../DataTable/DataTable";
import DisplayMap from "../../Map/DisplayMap";

const MenuItemDialog = () => {
  const [open, setOpen] = React.useState(false);

  /**
   * Opens our Dialog
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * Closes our Dialog
   */
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Tooltip title="Create Menu Item">
        <IconButton onClick={handleClickOpen}>
          <Add />
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth={true}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            handleClose();
          },
        }}
      >
        <DialogTitle>Create New Menu Item</DialogTitle>

        <DialogContent>
          <Grid container spacing={2}>
            {/* Left Side is for information about our Menu Item */}
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box>
                <Typography variant="h4" sx={{ textAlign: "center" }}>Details</Typography>

                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="item-name"
                  name="item-name"
                  label="Item Name"
                  fullWidth
                />

                <TextField
                  id="restaurant-lat"
                  required
                  type="number"
                  label="Lat"
                  margin="dense"
                  sx={{ width: "49.5%", marginRight: "1%" }}
                />

                <TextField
                  id="restaurant-long"
                  required
                  type="number"
                  label="Long"
                  margin="dense"
                  sx={{ width: "49.5%" }}
                />

                <TextField
                  required
                  multiline
                  rows={6}
                  margin="dense"
                  id="item-description"
                  name="item-description"
                  label="Item Description"
                  fullWidth
                />
              </Box>

              <Box>
                <Typography variant="h4" sx={{ textAlign: "center", margin: "0.5rem" }}>Suggestions</Typography>
                <DataTable />
              </Box>
            </Grid>

            {/* Right side is for information about restaurant locations this menu item is avilable at */}
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ height: "80vh" }}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>Locations</Typography>

              {/* Wrap map in a box for formatting */}
              <Box sx={{ height: "95%" }}>
                <DisplayMap position={{lat: 51.505, lng: -0.09}} zoom={13} provider={providers.OpenStretMaps}/>
              </Box>
            </Grid>
          </Grid>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="primary" variant="contained" onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}

export default MenuItemDialog;