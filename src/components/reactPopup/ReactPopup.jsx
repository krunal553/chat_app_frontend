import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const ReactPopup = () => {
  return (
    <div>
        {/* <h4>Popup - react js</h4> */}
        <Popup trigger={
            <button> Click to open popup</button>}
            position='bottom right'   
        >
            <div>GeeksForGeeeks</div>
            <button>Click here</button>
        </Popup>
    </div>
  )
}

export default ReactPopup