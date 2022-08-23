import Linkedin from "../../images/linkedin-pink.svg";
import Github from "../../images/github-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        href="https://www.linkedin.com/in/santhosh-sai-806b90219/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a>
      <a
        href="https://github.com/San0077"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github" />
      </a>
     
    </section>
  );
};

export default NavigationSocials;
