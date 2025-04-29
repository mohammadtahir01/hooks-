import {useState,useRef} from 'react';
import './App.css'

function App() {
 let [ispalying,setPlay1] = useState(false);
 let oneref = useRef(null);

 let handle=()=>{
  let nextIsPlaying = !ispalying;
  setPlay1(nextIsPlaying);

  if(nextIsPlaying){
    oneref.current.play();
  }else{
    oneref.current.pause(); 
  }

 }


  return (
    <>
     <button onClick={handle} >{ispalying ? 'Pause':'Play'}</button>
     <video
     width="250" 
     ref={oneref}
      onPlay={() => setPlay1(true)}
      onPause={()=> setPlay1(false)}>
         <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}

export default App
