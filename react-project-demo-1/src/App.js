import { useRef, useState } from "react" 

import Header from "./components/header"
import Footer from "./components/footer"

function App() {

  const [strMsg, setStrMsg] = useState("")

  const divdisplay = useRef("") 

  function lnkdemo1()
  {
    let msgText = "# App:: lnkdemo1"
    console.log(msgText)
 
    divdisplay.current.innerText = msgText
    
    setStrMsg(msgText)
  }

  const lnkdemo2 = () =>
  {
    let msgText = "# App:: lnkdemo2"
    console.log(msgText)
    divdisplay.current.innerText = msgText

    setStrMsg(msgText)
    
  }

  const btndemo1 = () =>
  {
    let msgText = "# App:: btndemo1"
    console.log(msgText)
    divdisplay.current.innerText = msgText

    setStrMsg(msgText)
  }

  return (
<>
      <div>
          <Header title="React Demo app v02.0.2"/>
          <p></p>
          {strMsg}
          <p></p>
          <a href="#" onClick={lnkdemo1}>link demo 1</a>
          <p></p>
          <a href="#" onClick={lnkdemo2}>link demo 2</a>
          <p></p>
          <button onClick={btndemo1}>button demo 1</button>
          <p></p>
          <hr></hr>
          <a href="#">useRef Demo 2</a>
          <p></p>
          <a href="#">useState Demo 2</a>
          <p></p>
          <Footer title="footer" year={2025}></Footer>
      </div>
      <div id="divdisplay" ref={divdisplay}>
      </div>
    </>
  );
}

export default App;