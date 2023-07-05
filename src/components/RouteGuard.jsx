import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("userInfo"))?.success;
  useEffect(() => {
    if (!token) {
     
      navigate(-1);
    }
  }, []);

  return <>{children}</>;
};

export default RouteGuard;
