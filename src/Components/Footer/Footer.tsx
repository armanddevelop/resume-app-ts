import { IIcons } from "../../@types/@types.App";
import { Link } from "@mui/material";

interface IFooterProps {
  configFooter: Array<IIcons>;
}

export const Footer = ({ configFooter }: IFooterProps): JSX.Element => {
  return (
    <footer className="footer-content">
      {configFooter.map(({ name, href, iconComponent }) => (
        <span key={name}>
          <Link href={href} target="_blank">
            {iconComponent}
          </Link>
        </span>
      ))}
    </footer>
  );
};
