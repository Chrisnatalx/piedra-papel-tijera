import "../App.css";
const Opcion = (props) => {
  return (
    <div className="opcion" onClick={props.eleccion}>
      {props.valor.eleccion}
    </div>
  );
};
export default Opcion;
