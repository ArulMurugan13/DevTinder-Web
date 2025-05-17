import React, { useEffect } from "react";
import FeedCard from "./FeedCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    const res = await axios.get(BACKEND_URL + "/feed", {
      withCredentials: true,
    });
    dispatch(addFeed(res?.data?.data));
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex justify-center mt-10">
       {feed && <FeedCard user={feed[0]}/>}
    </div>
  );
};

export default Feed;
