import * as React from "react"

import { Box } from "@chakra-ui/react"

import LeftFrameHome from "../img/frames/left-frame-home.png"
import RightFrameHome from "../img/frames/right-frame-home.png"
import LeftFramePage from "../img/frames/bottomleft-frame-page.png"
import RightFramePage from "../img/frames/topright-frame-page.png"
import BottomFramePage from "../img/frames/bottomright-frame-page.png"

const Frame = ({ pageStyle }) => {
  if (pageStyle === "home") {
    return (
      <>
        <Box position="absolute" left={0} top={0} h="100vh" zIndex={0}>
          <img
            src={LeftFrameHome}
            Home
            alt=""
            style={{ height: "100%", userSelect: "none" }}
          />
        </Box>
        <Box position="absolute" right={0} top={0} h="100vh" zIndex={0}>
          <img
            src={RightFrameHome}
            alt=""
            style={{ height: "100%", userSelect: "none" }}
          />
        </Box>
      </>
    )
  }

  return (
    <>
      <Box position="absolute" left={0} bottom={0}>
        <img src={LeftFramePage} alt="" style={{ height: "70vh" }} />
      </Box>
      <Box position="absolute" right={0} top={0}>
        <img src={RightFramePage} alt="" style={{ height: "90vh" }} />
      </Box>
      <Box position="absolute" right={0} bottom={0}>
        <img src={BottomFramePage} alt="" style={{ height: "40vh" }} />
      </Box>
    </>
  )
}

export default Frame
