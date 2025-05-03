
export default function Car2({label, value, onChange}){
    return(
        <div>
            {label}
            <input
            val1={value}
            onChange={onChange}
            />
        </div>
    )
}