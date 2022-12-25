import { Link } from "react-router-dom";
import "./Build.css";
import { useHistory } from "react-router-dom";

export default function Location(props) {
  const history = useHistory();
  const line = {
    width: "calc(25vh*1.41)",
    height: `18%`,
    marginRight: "4vw",
    borderBottom: `2px solid #00A3FF`,
    transformOrigin: `left`,
  };
  function handleClick(event)
  {
    props.setLocation(props.area.name)
    console.log('location set')
    history.push("/rocket");
  }
  const linemargin =
    props.direction == "left"
      ? { marginRight: props.area.marginR }
      : { marginLeft: props.area.marginL };
  return (
    <div className="location" style={props.style}>
      {props.direction == "left" && (
        <div
          className={`${props.direction} name`}
          style={{ marginLeft: props.area.marginL }}
          onClick={handleClick}
        >          <Link style={{ margin: "0" }}>
            {props.area.name}
                  </Link>
        </div>
      )}
      <div
        className="line"
        style={{
          ...line,
          transform: props.area.degree,
          transformOrigin: props.direction,
          ...linemargin,
        }}
      ></div>
      {props.direction == "right" && (
        <div
          className={`${props.direction} name`}
          style={{ marginRight: props.area.marginR }}
          onClick={handleClick}
        >
          <Link style={{ margin: "0" }}>
            {props.area.name}
          </Link>
        </div>
      )}
    </div>
  );
}
