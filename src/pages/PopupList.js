import React from 'react'

function PopupList() {
  let localPopData = JSON.parse(localStorage.getItem('popup'))

  return (
    <div style={{display: "grid", marginLeft: "25%", gridTemplateColumns: "auto auto auto"}}>
    {
    localPopData && localPopData.map((item, index) => {
        return(
          <div key={index} id="popup" className="mt-140 mr-40" style={{width: + item.width + "px", height: + item.height + "px", backgroundColor: item.bgColor, position: "relative"}} >
              <span  style={{position: "absolute", left: item.titleAlignmet + "px"}}> { item.title ? item.title : "Title"}</span>
          </div> 
        )
    })
    }
    </div>
  )
}

export default PopupList