import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import Banner from "../components/Banner";
// import CardEvent from "../components/CardEvent";
import { useUserContext } from "../context/UserContext";
import CardCustom from "../components/CardCustom";
import { getListEvent, getUsers } from "../api/user";
import { Navigate, useNavigate } from "react-router-dom";

const url =
  "https://cdn.dribbble.com/userupload/4025538/file/original-a80f539bc1af0021d43230c38a67d759.png?compress=1&resize=400x300&vertical=top";

function HomePage() {
  const { user } = useUserContext();
  const cardLength = Array.from({ length: 4 }, (v, i) => i);
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (user === null) {
      navigate("/signin");
    }

    const getEvents = async () => {
      try {
        const eventsFromBackend = await getListEvent();
        setEvents(eventsFromBackend);
      } catch (err) {
        console.log(err);
      }
    };
    getEvents();
  }, []);

  return (
    <div>
      <Container sx={{ marginTop: "20px" }}>
        <Banner />

        <Grid container spacing={3} margin="20px 0" padding="0 20px">
          {events?.map((event) => (
            <Grid item sm={12} md={6} lg={4}>
              <CardCustom event={event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
