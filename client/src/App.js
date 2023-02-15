import { useEffect, useState } from "react";
import {
  AppBar,
  Container,
  Grid,
  Grow,
  Typography,
  Box,
  Toolbar,
} from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxwidth="lg">
      <AppBar sx={{ margin: "30px 0px" }} position="static" color="inherit">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography sx={{ color: "rgba(0,183,255, 1)" }} variant="h2">
            stories
          </Typography>
          <img src={memories} ml={"15"} height={60} width={60} />
        </Toolbar>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
