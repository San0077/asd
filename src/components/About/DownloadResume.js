import DownloadIcon from "../../images/download-icon.png";
import Resume from "../../images/SanthoshR.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href="https://drive.google.com/file/d/1H1o3e7XgyjXqS2TsYR6gp0xZusUmjVj0/view" >
        <img src={DownloadIcon} alt="" className="download-img"></img>Download
        Resume
      </a>
     
    </section>
  );
};

export default DownloadResume;
