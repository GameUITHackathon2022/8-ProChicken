import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

const getListUserUrl = "user";
const getUserByIdUrl = (id) => {
  return `/user/${id}`;
};
const signUpUrl = "user";
const signinUrl = (email, password) =>
  `signin?email=${email}&password=${password}`;
const updateUserByIdUrl = (id) => `/user/${id}`; // Tất cả trường
const getListEventUrl = "event";
const getEventByIdUrl = (id) => {
  return `/event/${id}`;
};
const createEventUrl = "event";
const updateEventUrl = "event";
const deleteEventByIdUrl = (id) => {
  return `/event/${id}`;
};

const joinEventUrl = (userId, eventId) =>
  `joiningevent?user_id=${userId}&event_id=${eventId}`;

export const getUsers = async () => {
  try {
    const { data } = await axios.get(getListUserUrl);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (userId) => {
  try {
    const { data } = await axios.get(getUserByIdUrl(userId));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const signinUser = async (email, password) => {
  try {
    const { data } = await axios.get(signinUrl(email, password));
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log(data);
    return data.user;
  } catch (err) {
    console.log(err);
  }
};

export const signupUser = async (user) => {
  try {
    const { data } = await axios.post(signUpUrl, user);

    console.log("backend", data);
    return data;
  } catch (err) {}
};

export const updateUserById = async (userId, user) => {
  try {
    const { data } = await axios.post(updateUserByIdUrl(userId), user);

    console.log("backend", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getListEvent = async () => {
  try {
    const { data } = await axios.get("http://localhost:8080/event");

    console.log("backend", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getEventById = async (eventId) => {
  try {
    const { data } = await axios.get(getEventByIdUrl(eventId));

    console.log("backend", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createEvent = async (event) => {
  try {
    const { data } = await axios.post(createEventUrl, event);

    console.log("backend", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const { data } = await axios.delete(deleteEventByIdUrl(eventId));
    console.log("deleted");

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const joiningEvent = async (userId, eventId) => {
  try {
    const { data } = await axios.post(joinEventUrl(userId, eventId));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
