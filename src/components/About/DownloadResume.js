import DownloadIcon from "../../images/download-icon.png";
import Resume from "../../images/SanthoshR.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href="https://drive.google.com/file/d/1sVjJvL9GIrvcd75XHkl2KQZOey6X2zn6/preview" >
        <img src={DownloadIcon} alt="" className="download-img"></img>Download
        Resume
      </a>
     
    </section>
  );
};

export default DownloadResume;
