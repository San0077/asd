import DownloadIcon from "../../images/download-icon.png";
import Resume from "../../images/SANTHOSH C.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Santhosh C">
        <img src={DownloadIcon} alt="" className="download-img"></img>Download
        Resume
      </a>
    </section>
  );
};

export default DownloadResume;
