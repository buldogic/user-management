import style from "./index.module.css";
export const Button = (props) => {
  return (
    <button onClick={props.onClick}  className={style.button}>
      {props.children}
    </button>
  );
};
