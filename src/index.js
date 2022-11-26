import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "swiper/css";
import "swiper/css/navigation";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";

import UserProvider from "./context/UserContext";
import HomePage from "./pages/Homepage";
import ProfileDetailPage from "./pages/ProfileDetailPage";
import YourEvents from "./pages/YourEvents";
import ProfileDetail from "./pages/ProfileDetail";
import JoinedEventsPage from "./pages/JoinedEventsPage";
import SignInPage from "./pages/SigninPage";
import SignUpPage from "./pages/SignUpPage";
import Root from "./components/Root";
import EventDetailPage from "./pages/EventDetailPage";
import ParticipantsPage from "./pages/ParticipantsPage";
import CreateEventPage from "./pages/CreateEventPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//   },
//   {
//     path: "profile",
//     element: <Profile />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="profile-detail" element={<ProfileDetail />} />
        <Route path="joined-events" element={<JoinedEventsPage />} />
        <Route path="your-events" element={<YourEvents />} />
        <Route path="user-detail" element={<ProfileDetailPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="event-detail/:eventId" element={<EventDetailPage />} />
        <Route path="your-events/:eventId" element={<ParticipantsPage />} />
        <Route path="create-event/:userId" element={<CreateEventPage />} />
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
