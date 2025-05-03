


export default function Panel({ title, children, isVisible,onShow }) {
    // let [isVisible,setIsVisible] = useState(IsActive);
    return (
        <div>
            <h2>{title}</h2>
            {
                isVisible ? (
               <p>{children}</p>
                ):(
                    <button onClick={onShow}>Show1</button>
                )}
        </div>
    );
}