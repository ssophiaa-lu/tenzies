export default function Die(props) {
    return (
        <button className={props.isHeld? "isHeld" : undefined}>{props.value}</button>
    )
}