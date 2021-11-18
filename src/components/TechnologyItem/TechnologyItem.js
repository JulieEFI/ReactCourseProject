import "./TechnologyItem.scss";
const TechnologyItem = (props) => {
    const { technology} = props;
    
    return (
      <div className="technology__item">
          <div className="technology__inner">
                <h4>Name: {technology.name}</h4>
                <p>Description: {technology.description}</p>
                <p>Expansion: {technology.expansion}</p>    
                <p>Age: {technology.age}</p>
                <p>Build time: {technology.build_time}</p>
                <p>Food: {technology.cost?.Food}</p>
                <p>Gold: {technology.cost?.Gold}</p>
                <p>Wood: {technology.cost?.Wood}</p>
               
          </div>
      </div>
    );
}

export default TechnologyItem;