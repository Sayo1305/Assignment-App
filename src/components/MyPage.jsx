import React from "react";
import HomeNavbar from "./HomeNavbar";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import CardBox from "./CardBox";
const MyPage = () => {
  return (
    <div className="MyPageContainer">
      <HomeNavbar />
      {/* <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Stack> */}
      {

      }
      <CardBox theme={"kuch bhi"}/>
      <CardBox theme={"djdjd"}/>
    </div>
  );
};

export default MyPage;
