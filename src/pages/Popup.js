import React, { useState } from 'react'
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
function Popup() {
    
    let storagePopup = JSON.parse(localStorage.getItem('popup')) || []
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [title, setTitle] = useState();
    const [popBgColor, setColor] = useState();
    const [horizontalTitle, setHorizontalTitle] = useState();

    function PopupWidth (popWidth){
        if(popWidth > 1200){
            toast.error("Length must be less than 1200")
            setWidth(0)
        }else
            setWidth(popWidth)
    }

    function PopupHeight (popHeight){
        setHeight(popHeight)
    }

    function PopupTitle (popTitle){
        setTitle(popTitle)
    }

    function PopColor (popColor){
        setColor(popColor)
    }

    function PopHoriz (horiz){
        setHorizontalTitle(horiz)
    }

    function setLocalStorage () {
        let pop = {
            width: width,
            height: height,
            title: title,
            bgColor: popBgColor,
            titleAlignmet: horizontalTitle
        }
        storagePopup.push(pop)
        localStorage.setItem('popup', JSON.stringify(storagePopup))
        toast.success(title +" added to your list")
    }

  return (
      <div className="flex">
        <div className="component-container">
            <Toaster />
            <div id="popup-controller" className="flex">
                <div className="mr-40">
                    <span className="mr-10">Width</span>
                    <input type="number" className="popup-admin-input pl-10" onChange={popWidth => PopupWidth(popWidth.target.value)}/>
                </div>
                <div className="mr-40">
                    <span className="mr-10">Height</span>
                    <input type="number" className="popup-admin-input pl-10" onChange={popHeight => PopupHeight(popHeight.target.value)} disabled={!width}/>
                </div>
                <div className="mr-40">
                    <span className="mr-10 ml-50">Title</span>
                    <input type="text" className="popup-admin-input pl-10" onChange={popTitle => PopupTitle(popTitle.target.value)} disabled={!width}/>
                </div>
                <div className="flex mr-40">
                    <span className="mr-10 ml-50">Color</span>
                    <input type="color" className="popup-admin-color pl-10" onChange={popColor => PopColor(popColor.target.value)} disabled={!width}/>
                </div>
                <div className="flex mr-40">
                    <span className="mr-10 ml-50">Title Position Horizontal</span>
                    <input type="range" id="points" name="points" min="0" max={width} onChange={horiz => PopHoriz(horiz.target.value)}  disabled={!height}/>
                </div>
            </div>
            <button id="popup-create" className="mt-40" onClick={setLocalStorage}>CREATE</button>
            <div className="flex" id="content">
                {
                    width ? 
                    <div id="popup" className="mt-140" style={{width: + width + "px", height: + height + "px", backgroundColor: popBgColor, position: "relative"}} >
                     <span  style={{position: "absolute", left: horizontalTitle + "px"}}> { title ? title : "Title"}</span>
                    </div> 
                    : 
                    <></>
                }
                
            </div>
        </div>
    </div>
    
  )
}

export default Popup