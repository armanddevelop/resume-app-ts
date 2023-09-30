import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IRoute } from "../../@types/@types.App";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
interface INavBarProps {
  routes: IRoute[];
}
export const NavBar = ({ routes }: INavBarProps): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const [collapse, setCollapse] = useState<boolean>(false);
  const handleResize = () => {
    console.log(window.innerWidth);
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    // window.addEventListener("resize", handleResize);
    if (width < 500) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
    // return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  const button = {
    [`&.active`]: {
      backgroundColor: "#13395e",
      color: "#b6c8d9",
    },
  };
  return (
    <Box style={{ display: "flex", height: "100vh" }}>
      <Sidebar transitionDuration={800} collapsed={collapse}>
        <Menu menuItemStyles={{ button }}>
          {routes.map(({ name, path }) => {
            if (path === "*") return null;
            return (
              <MenuItem key={name} component={<Link to={path} />}>
                {" "}
                {name}{" "}
              </MenuItem>
            );
          })}
        </Menu>
      </Sidebar>
    </Box>
  );
};
