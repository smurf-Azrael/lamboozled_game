import React, { useEffect, useState } from "react";
import CustomImage from "../base/CustomImage";
import content from "../../public/assets/articles.json";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import {
  createTheme,
  ThemeProvider,
  styled,
  withStyles,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { flexbox } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function Basic() {
  const contentData = content;
  const [unlock, setUnlock] = useState(true);
  // const StyleTooltip = withStyles({
  //   tooltip: {
  //     color: "#FF0000",
  //     backgroundColor: "#FFE0E0",
  //   },
  // })(Tooltip);
  const [guideOpen, setGuideOpen] = React.useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);
  useEffect(() => {
    handleGuideOpen();
  }, [unlock===false]);
  return (
    <>
      <div
        className={`${
          unlock ? "bg-backgroundBasic" : "bg-background"
        } w-full h-screen bg-no-repeat bg-cover`}
      >
        <div className="flex flex-row">
          <div className="relative translate-x-20 w-5/12 grid justify-items-stretch">
            <img
              src="/images/tabletlayout.svg"
              className="absolute w-full max-h-screen top-0 left-0 -z-10"
            ></img>
            <div className="w-2/3 justify-self-center pt-24">
              <Grid container columns={10}>
                <Grid
                  item
                  container
                  lg={8}
                  className="border-2 border-black flex justify-center p-2"
                >
                  <Grid item lg={3}>
                    <Tooltip
                      title="The title is all captitalized!"
                      placement="top"
                      arrow
                    >
                      <CustomImage src="/images/Icon1.svg" className="h-8" />
                    </Tooltip>
                  </Grid>
                  <Grid item lg={3}>
                    <CustomImage src="/images/Icon2.svg" className="h-8" />
                  </Grid>
                  <Grid item lg={3}>
                    <CustomImage src="/images/Icon3.svg" className="h-8" />
                  </Grid>
                  <Grid item lg={3}>
                    <CustomImage src="/images/Icon4.svg" className="h-8" />
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={2}
                  className="border-2 border-black flex justify-center"
                >
                  <button
                    onClick={() => {
                      console.log("help clicked");
                    }}
                  >
                    <CustomImage src="/images/help.svg" className="h-8" />
                  </button>{" "}
                </Grid>
              </Grid>

              <div className="flex justify-center pt-10">
                <CustomImage src="/images/contentImage1.svg" />
              </div>
              <div className="text-2xl text-black font-bold pt-10 ">
                {contentData[0].title}
              </div>
            </div>
          </div>
          <div className="w-7/12 relative">
            <img
              src="/images/unlock.svg"
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 ${
                unlock ? "" : "hidden"
              }`}
              onClick={() => {
                setUnlock(false);
              }}
            ></img>
            <img
              src="/images/tobeunlocked.svg"
              className={`absolute top-1/2 left-1/2 -translate-x-36 translate-y-48 ${
                unlock ? "" : "hidden"
              }`}
            ></img>
          </div>
        </div>
        <Modal
          open={guideOpen}
          onClose={handleGuideClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>

        <div className="fixed bottom-0 w-full flex flex-row justify-between">
          <div>
            <CustomImage src="/images/bottomlogo.svg" className="h-24" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 bg-red-300 flex flex-row items-center">
              <label>10 issues</label>
              <CustomImage src="/images/eye.svg" className="h-8" />
            </div>
            <button className="bg-black rounded-3xl px-6 py-2 text-white font-bold text-2xl">
              SUBMIT
            </button>
          </div>
          <div>
            <CustomImage src="/images/bottomlambmeter.svg" className="h-24" />
          </div>
        </div>
      </div>
    </>
  );
}
