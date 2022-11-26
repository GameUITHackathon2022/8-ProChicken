import React from "react";
import { useNavigate } from "react-router-dom";

const defaultUrl =
  "https://images.unsplash.com/photo-1669394962540-eb2253ec5572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80";

const defaultDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate molestiae mollitia possimus animi esse? Doloremque accusamus facere aperiam perferendis mollitia totam praesentium fugiat dolor illo voluptas veritatis, ab porro?";

const CardCustom = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className=" border-2 border-orange-400 rounded-md flex flex-col gap-y-5 p-5">
      <div className="relative rounded-md image">
        <img
          src={defaultUrl || event.image}
          alt="card-img"
          className="rounded-md"
        />
        <span className="absolute p-2 text-sm font-semibold text-white bg-orange-500 rounded-md top-4 left-2">
          {event?.time || "16 / 03 / 2003"}{" "}
        </span>
        <span className="absolute p-2 text-sm font-semibold text-white bg-green-500 rounded-md top-4 right-2">
          {event.greenPoint || 1000}
        </span>
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">{event?.name || "heading"}</h1>
        <span className="text-[0.8em] font-semibold text-gray-500">
          {event?.company || "Khoa hoc tu nhien"}
        </span>
      </div>
      <p>{event?.description || defaultDesc}</p>
      <button
        className="w-full px-3 py-2 text-white bg-orange-400 rounded-3xl"
        onClick={() => navigate(`/event-detail/${event.id}`)}
      >
        Xem thêm
      </button>
    </div>
  );
};

export default CardCustom;
