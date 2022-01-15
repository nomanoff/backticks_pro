import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <Spinner message="Loading..." />;
  }
  return <div>Feed</div>;
};

export default Feed;
