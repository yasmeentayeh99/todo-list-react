import ListIem from "../ListIem";
import "./style.css";
  
function List(props) {
  return (
    <section className={"list flex"}>
      {props.items.map((item, idx) => (
        <ListIem title={item.title} key={`${item.id}`} handleDelete={props.handleDelete(item.id )} />
      ))}
    </section>
  );
}

export default List;
