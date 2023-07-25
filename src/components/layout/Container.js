import styles from './Container.module.css'

function Container(props){
    return(
        <di className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </di>
    )
}
export default Container