import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { formatISO } from "date-fns";
import Geocode from "react-geocode";

import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import Feeding from "../pages/api/feeding";

Geocode.setApiKey("AIzaSyD4Rah2Ughn-m3FYwwAJeEQAMOAvVB1MsI");
Geocode.setLanguage("en");
Geocode.setRegion("ca");
Geocode.setLocationType("ROOFTOP");

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const NewFeedingView = () => {
  const classes = useStyles();
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(0);

  const LocationParser = () => {
    const address = `${street} ${city} ${province} ${country}`;
    return Geocode.fromAddress(address, process.env.MAPS_API).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        const point = {
          type: "Point",
          coordinates: [lat, lng],
        };
        return point;
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const submitFeeding = async (event) => {
    event.preventDefault();
    LocationParser().then((point) => {

      const newDate = formatISO(date, { representation: "date" });
      const newTime = formatISO(time, { representation: "time" });
      const combinedDateTime = `${newDate}T${newTime}`;
      const feedingObject = {
        time: combinedDateTime,
        location: point,
        food: food,
        quantity: quantity,
      };
      const response = Feeding.postNewFeeding(feedingObject);
      console.log(response);
      return response;
    });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.root}>
        <form
          onSubmit={(event) => {
            submitFeeding(event);
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <DatePicker
                    label="Set Feeding Date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                  <TimePicker
                    required
                    label="Set Feeding Time"
                    value={time}
                    size="medium"
                    onChange={(event) => setTime(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid item>
                    <TextField
                      label="Street"
                      fullWidth
                      value={street}
                      size="medium"
                      onChange={(event) => setStreet(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="City"
                      fullWidth
                      value={city}
                      size="medium"
                      onChange={(event) => setCity(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Province/State"
                      fullWidth
                      value={province}
                      size="medium"
                      onChange={(event) => setProvince(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Country"
                      fullWidth
                      value={country}
                      size="medium"
                      onChange={(event) => setCountry(event.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                value={food}
                onChange={(event) => setFood(event.target.value)}
                label="Type of Food"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item>
              <TextField
                value={quantity}
                type="number"
                onChange={(event) => setQuantity(event.target.value)}
                label="Amount of Food in grams"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item>
              <Button type="submit">Submit Feeding</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default NewFeedingView;
