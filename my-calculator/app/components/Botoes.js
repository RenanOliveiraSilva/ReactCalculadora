import styles from "../page.module.css";

export default function Botoes(props) {
    return (
        <div>
            <button onClick={props.onClick} className={styles.botao}>
                {props.valor}
            </button>
        </div>
    )
}