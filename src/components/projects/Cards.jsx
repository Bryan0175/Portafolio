import "./cards.css";

const Cards = ({title,src,description,deployment,source}) => {
  return(
      <div className="project__box">
          <h3>{title}</h3>
          <div className="project__group">
              <div>
                <img src={src}/>
              </div>
              <div>
                  {description}
              </div>
          </div>
          <div className="project__actions">
              <button className="btn_source">
                  <a href={source}>Source</a>
              </button>
              <button className="btn_deploy">
                  <a href={deployment}>Deployment</a>
              </button>
          </div>
      </div>
  );
}

export default Cards;