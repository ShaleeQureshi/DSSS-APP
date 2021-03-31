import React from "react";
import { useParams } from "react-router";
import Feed from "react-instagram-authless-feed";

const InstagramApp = () => {
  const { id } = useParams();
  return <Feed userName={id} />;
};
export default InstagramApp;
