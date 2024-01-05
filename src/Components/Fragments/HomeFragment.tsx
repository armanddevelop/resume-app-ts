import javaScriptSvg from "../../assets/javaScript-logo.svg";
import reactLogo from "../../assets/react-2.svg";

export const HomeFragment = () => {
  return (
    <div className="presentation">
      <p>
        I'm a frontend developer with 5 years of experience developing web
        applications, I'm focusing in create the best web applications using
        <b> JavaScript</b> and <b>React</b>
      </p>
      <div>
        <img
          className="java-script-svg"
          src={javaScriptSvg}
          alt="javaScriptSvg"
        />
        <img className="react-svg" src={reactLogo} alt="reactLogo" />
      </div>
    </div>
  );
};
