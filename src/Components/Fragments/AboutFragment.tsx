import aboutImage from "../../assets/AboutmePhoto.jpg";

export const AboutFragment = (): JSX.Element => {
  return (
    <>
      <p>
        Hello Human I'm a enthusiastic of technology I like to learn new things
        about codig that help me improve my code skills.{" "}
      </p>
      <p>
        In this pages you will find some of my work and the tecnologies that I
        feel confident working on. Also I like to share my knowlege with other
        people that like to code, so if you want to contact me feel to send me a
        message in my social media networks below in the footer
      </p>
      <img src={aboutImage} className="about-image" alt="aboutImage" />
    </>
  );
};
