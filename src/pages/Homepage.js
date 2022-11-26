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

const url =
  "https://cdn.dribbble.com/userupload/4025538/file/original-a80f539bc1af0021d43230c38a67d759.png?compress=1&resize=400x300&vertical=top";

function HomePage() {
  const cardLength = Array.from({ length: 4 }, (v, i) => i);
  const [events, setEvents] = useState([]);

  useEffect(() => {
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
        <Swiper
          auto={true}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          <SwiperSlide>
            <Banner urlImage={url} />
          </SwiperSlide>
          <SwiperSlide>
            <Banner urlImage={url} />
          </SwiperSlide>
          <SwiperSlide>
            <Banner urlImage={url} />
          </SwiperSlide>
        </Swiper>
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
