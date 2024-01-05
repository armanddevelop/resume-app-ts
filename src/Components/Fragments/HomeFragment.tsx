import javaScriptSvg from "../../assets/javaScript-logo.svg";
import reactLogo from "../../assets/react-2.svg";
import webDevImg from "../../assets/Web-Developer.png";

export const HomeFragment = (): JSX.Element => {
  return (
    <>
      <div className="presentation">
        <p>
          I'm a frontend developer with 5 years of experience developing web
          applications, I'm focusing in create the best web applications using
          <b> JavaScript</b> and <b>React</b>
        </p>
        <div className="logos-content">
          <img
            className="java-script-svg"
            src={javaScriptSvg}
            alt="javaScriptSvg"
          />
          <img className="react-svg" src={reactLogo} alt="reactLogo" />
        </div>
      </div>
      <div>
        <img className="img-developer" src={webDevImg} />
      </div>
    </>
  );
};
