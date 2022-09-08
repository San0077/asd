import "./project.css"
const PortfolioDescription = () => {
  return (
    <section className="portfolio-text">
      <h2 className="title-font pink-text h2-tag">My Project</h2>
      <p className="white-text p-tag">
        I have spent a lot of time on different projects. I love doing
        everything from scratch. Here are some of my favorite ones which sum up
        my knowledge. I have done many small projects from different courses and
        challenges to learn the basics. You can check them on my{" "}
        <span>
          <a
            href="https://github.com/San0077"
            className="pink-text"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </span>
      </p>
      <h2 className="title-font pink-text h2-tag">Credentials</h2>
      <div className="crendential">
      <p className="white-text p-tag">
      <article className="title">For User</article>
        Username : santhosh@hotmail.com <br/>
        password : student1234
        
      </p>
      <p className="white-text p-tag ">
        <article className="title">For Admin</article>
        Username : teacher@gmail.com <br/>
        password : @dminControl
        
      </p>
      </div>

    </section>
  );
};

export default PortfolioDescription;
