import { ReactUserProfile } from "@neuctra/authix";
import React from "react";
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
//   const navigate = useNavigate();
  return (
    <>
      <ReactUserProfile />
    </>
  );
};

export default ProfilePage;
