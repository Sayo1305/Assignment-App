import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Avatar from "@mui/material/Avatar";
const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="HomeNavbar">
      <div className="NavbarRight">
        <div onClick={()=>{navigate('/Home')}}>Logo</div>
        <div>Note Take APP</div>
      </div>

      <div className="NavbarRight">
        <div className="SearchBardiv">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill-color="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            className="SearchBar"
            type={"search"}
            placeholder="Search files"
          />
        </div>

        <div className="AccountButton">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button variant="" {...bindTrigger(popupState)}>
                  <Avatar src="/broken-image.jpg" />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}><p  onClick={()=>{navigate('/Mypage')}}>My account</p></MenuItem>
                  <MenuItem  onClick={popupState.close} ><p onClick={()=>{navigate('/Home')}}>Home page</p></MenuItem>
                  <MenuItem  onClick={popupState.close} ><p onClick={()=>{navigate('/')}}>Logout</p></MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
