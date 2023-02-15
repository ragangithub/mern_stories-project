import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@mui/material";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0px 20px 0 0",
      }}
      container
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item xs={12} sm={6} sx={{ alignSelf: "normal" }}>
          <Post setCurrentId={setCurrentId} key={post._id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
