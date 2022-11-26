import React from "react";

const defaultUserUrl = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

function Profile() {
  return (
    <>
      <div className="d-flex justify-content-center position-relative">
        <span
          className="position-absolute top-100 start-50 translate-middle"
          style={{
            width: "50px",
            height: "50px",
          }}
        >
          <i class="bx bx-camera">hihi</i>
        </span>
      </div>
      <h2 className="h2 mb-5 text-center">Edit profile</h2>
    </>
  );
}

export default Profile;
