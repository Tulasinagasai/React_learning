

function Button(props){
return(
    <button className={`${props.bgColor ? props.bgColor:""} ${props.bgtype ? props.bgtype:""} ${props.btn_type ? props.btn_type:""}`}
    >Read more</button>
)
}
export default Button;