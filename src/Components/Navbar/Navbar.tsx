import { type Dispatch, type SetStateAction } from "react";
import { Sidebar, Menu, MenuItem, type SidebarProps } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IRoute } from "../../@types/@types.App";
import { Box, IconButton } from "@mui/material";

interface INavBarProps extends SidebarProps {
  routes: IRoute[];
  breakpoint: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  setBreakPoint: Dispatch<SetStateAction<boolean>>;
}

export const NavBar = (props: INavBarProps): JSX.Element => {
  const { routes, setToggle, setBreakPoint, breakpoint, toggled } = props;
  const button = {
    [`&.active`]: {
      backgroundColor: "#044d96",
      color: "#d8dee4",
    },
  };

  return (
    <>
      {breakpoint && (
        <IconButton onClick={() => setToggle(!toggled)}>
          <MenuOutlinedIcon />
        </IconButton>
      )}
      <Box className="container-navbar">
        <Sidebar
          onBackdropClick={() => setToggle(!toggled)}
          onBreakPoint={() => setBreakPoint}
          {...props}
        >
          <Menu menuItemStyles={{ button }}>
            {routes.map(({ name, path }) => {
              if (path === "*") return null;
              return (
                <MenuItem
                  key={name}
                  component={
                    <Link to={path} onClick={() => setToggle(!toggled)} />
                  }
                >
                  {" "}
                  {name}{" "}
                </MenuItem>
              );
            })}
          </Menu>
        </Sidebar>
      </Box>
    </>
  );
};
