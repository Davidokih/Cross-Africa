import React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Category from "../Category/Category";
import SignUp from "../SigmUpAndSignIn/SignUp";
import SignIn from "../SigmUpAndSignIn/SignIn";
import Information from "../Information/Information";
import Detail from "../Detail/Detail";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import Accreview from "../Review/Accreview";
import Allitems from "../Allitems/Allitems";
import ErrorOtp from "../ErrorOtp/ErrorOtp";
import Checkout from "../Payment/Checkout";
import Shipping from "../Payment/Shipping";
import Finishshipping from "../Payment/Finishshipping";
import Dashboard from "../SigmUpAndSignIn/Dashboard";
import Productpage from "../SigmUpAndSignIn/Productpage";
import Businessinfo from "../SigmUpAndSignIn/Businessinfo";
import Bankdetails from "../SigmUpAndSignIn/Bankdetails";
import Businessinfo2 from "../SigmUpAndSignIn/Businessinfo2";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/category",
      children: [
        {
          index: true,
          element: <Category />,
        },
      ],
    },
    {
      path: "/:auth",
      children: [
        {
          index: true,
          element: <SignUp />,
        },
        {
          path: "user",
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
      ],
    },
    {
      path: "/information",
      element: <Information />,
    },
    {
      path: "/review",
      element: <Review />,
    },
    {
      path: "/bankdetails",
      element: <Bankdetails />,
    },
    {
      path: "/business",
      element: <Businessinfo />,
    },
    {
      path: "/business2",
      element: <Businessinfo2 />,
    },
    {
      path: "/acct-review",
      element: <Accreview />,
    },
    {
      path: "/allitems",
      element: <Allitems />,
    },
    {
      path: "/product",
      element: <Productpage />,
    },
    {
      path: "/otperror",
      element: <ErrorOtp />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/finishshipping",
      element: <Shipping />,
    },
    {
      path: "/shipping",
      element: <Finishshipping />,
    },

    {
      path: "/detail",
      element: <Detail />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
  ]);

  return element;
};

export default AllRoutes;
