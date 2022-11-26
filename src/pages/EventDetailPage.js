import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById, joiningEvent } from "../api/user";
import { useUserContext } from "../context/UserContext";

const defaultUrl =
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1313&q=80";
const EventDetailPage = () => {
  const [event, setEvent] = useState("");

  const { eventId } = useParams();
  const { user, setUser } = useUserContext();

  useEffect(() => {
    const getEventId = async () => {
      const data = await getEventById(eventId);
      setEvent(data);
    };

    getEventId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  let isJoined = false;
  for (let event of user.listEvent) {
    if (event === parseInt(eventId)) {
      isJoined = true;
    }
  }

  const handleJoin = async (eventId) => {
    try {
      const userData = await joiningEvent(user.id, eventId);
      console.log(userData);

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      navigate("/joined-events");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="p-10 event-detail">
      <Container>
        <div className="p-10 shadow-lg page-container">
          <div className="flex justify-between mb-6">
            <div className="flex justify-center gap-x-10 ">
              <div className="image w-[300px] h-[300px] rounded-lg">
                <img
                  src={defaultUrl}
                  alt="img-detail"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">
                  {event?.name || "Ten event"}
                </h1>
                <div className="flex items-center p-5 pl-0 gap-x-3 text-gray-400">
                  <p className="">16/03/2003</p>
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <p>{event?.location || "Đại học KHTN TPHCM"}</p>
                </div>
              </div>
            </div>
            <div className="">
              {!isJoined ? (
                <button
                  className="px-8 py-2 w-fit text-white bg-primary rounded-md
                hover:bg-green-700 transition
              "
                  onClick={() => handleJoin(event.id)}
                >
                  Tham gia
                </button>
              ) : (
                <button
                  className="px-8 py-2 w-fit text-white rounded-md
                bg-gray-500 transition
                
              "
                  disabled
                >
                  Đã tham gia
                </button>
              )}
            </div>
          </div>
          <div className="font-xl">
            <p className="text-xl">{event?.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventDetailPage;
