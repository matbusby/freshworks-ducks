import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useState, useCallback } from "react";
import { useToasts } from "react-toast-notifications";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { formatISO, isPast } from "date-fns";
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

Geocode.setApiKey(process.env.NEXT_PUBLIC_MAPS_API);
Geocode.setLanguage("en");
Geocode.setRegion("ca");
Geocode.setLocationType("ROOFTOP");

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: "50px 15px 50px 15px",
    backgroundImage: "url(" + "/assets/images/wetland-bg.svg" + ")",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw auto",
    backgroundAttachment: "fixed",
    bottom: "0",
  },
  card: {
    textAlign: 'center',
    maxWidth: "800px",
    margin: "0 auto",
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
  },
}));

const NewFeedingView = () => {
  const classes = useStyles();
  const { addToast } = useToasts();

  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [food, setFood] = useState("");
  const [numberOfDucks, setNumberOfDucks] = useState("");
  const [quantity, setQuantity] = useState(0);

  const LocationParser = () => {
    const address = `${street} ${city} ${province} ${country}`;
    return Geocode.fromAddress(address, process.env.NEXT_PUBLIC_MAPS_API).then(
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

    const newDate = formatISO(date, { representation: "date" });
    const newTime = formatISO(time, { representation: "time" });
    const combinedDateTime = `${newDate}T${newTime}`;

    if (isPast(new Date(combinedDateTime))) {
      LocationParser()
        .then((point) => {
          const feedingObject = {
            time: combinedDateTime,
            location: {
              coords: point,
              street: street,
              city: city,
              province: province,
              country: country,
            },
            food: food,
            numberOfDucks: numberOfDucks,
            quantity: quantity,
          };
          Feeding.postNewFeeding(feedingObject)
            .then((response) => {
              console.log(`ID of new feeding - ${response._id}`);
              addToast("Successfully registered new feeding", {
                appearance: "success",
              });
              setTime(new Date());
              setDate(new Date());
              setStreet("");
              setCity("");
              setProvince("");
              setCountry("");
              setFood("");
              setNumberOfDucks("");
              setQuantity("");
              return response;
            })
            .catch((error) => {
              addToast(`Error registering new feeding ${error}`, {
                appearance: "error",
              });
              return error;
            });
        })
        .catch((error) => {
          return error;
        });
    } else {
      addToast(
        `Please only enter feedings that have already occured.  Feeding times cannot be set in the future`,
        {
          appearance: "error",
        }
      );
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.root}>
        <Card elevation={10} className={classes.card}>
          <form
            onSubmit={(event) => {
              submitFeeding(event);
            }}
          >
            <Grid container direction="column" spacing={2}>
              <Grid container direction="row" spacing={2} justify="center">
                <Grid item xs={5}>
                  <DatePicker
                    style={{ width: "100%" }}
                    InputProps={{ disableUnderline: true }}
                    label="Set Feeding Date"
                    value={date}
                    onChange={(event) => setDate(event)}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TimePicker
                    InputProps={{ disableUnderline: true }}
                    style={{ width: "100%" }}
                    required
                    label="Set Feeding Time"
                    value={time}
                    size="medium"
                    onChange={(event) => {
                      console.log(`Time: ${JSON.stringify(event)}`);
                      setTime(event);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Street"
                    fullWidth
                    value={street}
                    size="medium"
                    onChange={(event) => setStreet(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    label="City"
                    fullWidth
                    value={city}
                    size="medium"
                    onChange={(event) => setCity(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    label="Province/State"
                    fullWidth
                    value={province}
                    size="medium"
                    onChange={(event) => setProvince(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    label="Country"
                    fullWidth
                    value={country}
                    size="medium"
                    onChange={(event) => setCountry(event.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={12} md={3}>
                  <TextField
                    value={food}
                    onChange={(event) => setFood(event.target.value)}
                    label="Type of Food"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    value={numberOfDucks}
                    type="number"
                    onChange={(event) => setNumberOfDucks(event.target.value)}
                    label="Number of Ducks"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    value={quantity}
                    type="number"
                    onChange={(event) => setQuantity(event.target.value)}
                    label="Amount of Food in grams"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} justify="space-around">
                <Button type="submit" className={classes.button}>
                  Submit Feeding
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default NewFeedingView;
