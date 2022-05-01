import "./style.css";
import Button from "../Button";

function ListItem(props) {
  return (
    <div className={"flex item"}>
      <p className={"title"}>{props.title}</p>
      <Button onClick={props.handleDelete}>Delete</Button>
    </div>
  );
}

export default ListItem;
