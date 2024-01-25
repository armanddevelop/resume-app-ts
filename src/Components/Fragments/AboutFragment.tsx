import aboutImage from "../../assets/AboutmePhoto.jpg";
import { Container } from "@mui/material";

export const AboutFragment = (): JSX.Element => {
  return (
    <>
      <p>
        I'm enthusiastic of technology, In this page you will find some of my
        work and the technologies that I feel confident working on.
      </p>
      <p>
        I'm also like to work in a team to learn from every member new things
        and share experience, I like to practice my english skills and learn new
        vocabulary, Also I like to share my knowlege with other people that like
        to code. To me is great to learn new things about web development, I put
        some of that knowledge when I build this page.
      </p>
      <p>
        So if you want to contact me feel free to send me a message in my social
        media networks below in the footer
      </p>
      <Container>
        <img src={aboutImage} className="about-image" alt="aboutImage" />
      </Container>
    </>
  );
};
