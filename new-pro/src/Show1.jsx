import  Panel from './Panel2'
import {useState} from 'react'

export default function Show(){
let [isVisible,setIsVisible] = useState(0)

    return(
        <div className="show4">
            <h1>Almaty, Kazakhstan</h1>
            <Panel
             title="About"
             isActive={isVisible === 0}
             onShow={() => setIsVisible(0)}>

              With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            
            <Panel
            title="Etymology"
           isVisible={isVisible === 1}
            onShow={() => setIsVisible(1)}>With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>

        </div>
    )
}