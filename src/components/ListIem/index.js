import "./style.css";
import Button from "../Button";

function ListItem(props) {
    const { handleDelete } = props
  return (
    <div className={"flex item"}>
      <p className={"title"}>{props.title}</p>
      <Button onClick={handleDelete(props.id)}>Delete</Button>
    </div>
  );
}

export default ListItem;
