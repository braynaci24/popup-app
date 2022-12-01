import React, { useState } from 'react'
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
function Popup() {
    
    let storagePopup = JSON.parse(localStorage.getItem('popup')) || []
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [title, setTitle] = useState();
    const [popTitleTextColor, setTitleColor] = useState("white");
    const [popBgColor, setColor] = useState("black");
    const [horizontalTitle, setHorizontalTitle] = useState();
    const [verticalTitle, setVerticalTitle] = useState();
    const [status, setStatus] = useState("Active")

    function PopupWidth (popWidth){
        if(popWidth > 500){
            toast.error("Length must be less than 1200")
            setWidth(0)
        }else
            setWidth(popWidth)
    }

    function PopupStatus (status){
        setStatus(status)
        console.log("sds")
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
    function popTitleColor (titleColor){
        setTitleColor(titleColor)
    }

    function PopHoriz (horiz){
        setHorizontalTitle(horiz)
    }

    function PopVertical (vertical){
        setVerticalTitle(vertical)
    }

    function setLocalStorage () {
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes()
        var month = d.getMonth()+1;
        var day = d.getDate();
      
      var output = d.getFullYear() + '/' +
          (month<10 ? '0' : '') + month + '/' +
          (day<10 ? '0' : '') + day;
      
        let pop = {
            id: storagePopup.length +1,
            status: status,
            width: width,
            height: height,
            title: title,
            bgColor: popBgColor,
            titleColor: popTitleTextColor,
            titleVerticalAlignmet: verticalTitle,
            titleAlignmet: horizontalTitle,
            creationDate: `${output} - ${time}`
        }
        if(width && height){
            storagePopup.push(pop)
            localStorage.setItem('popup', JSON.stringify(storagePopup))
            toast.success(title +" added to your list")
        }
        else 
            toast.error("Width and length are required")

    }

  return (
      <div className="flex">
        <div className="component-container">
            <Toaster />
            <div id="popup-controller" className="grid">
                <div className="flex">
                    <span className="mr-10">Width</span>
                    <input type="number" className="popup-admin-input pl-10" onChange={popWidth => PopupWidth(popWidth.target.value)}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Height</span>
                    <input type="number" className="popup-admin-input pl-10" onChange={popHeight => PopupHeight(popHeight.target.value)} disabled={!width}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Title</span>
                    <input type="text" className="popup-admin-input pl-10" onChange={popTitle => PopupTitle(popTitle.target.value)} disabled={!width}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Color</span>
                    <input type="color" className="popup-admin-color pl-10" onChange={popColor => PopColor(popColor.target.value)} disabled={!width}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Title Color</span>
                    <input type="color" className="popup-admin-color pl-10" onChange={titleColor => popTitleColor(titleColor.target.value)} disabled={!width}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Title Position Horizontal</span>
                    <input type="range" id="points" name="points" min="0" max={width - 32} onChange={horiz => PopHoriz(horiz.target.value)}  disabled={!height}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Title Position Vertical</span>
                    <input type="range" id="points" name="points" min="0" max={height - 20} onChange={vertical => PopVertical(vertical.target.value)}  disabled={!height}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Popup Status</span>
                    <select onChange={status => PopupStatus(status.target.value)}>
                        <option>Active</option>
                        <option>Passive</option>
                    </select>
                </div>
            </div>
            <button id="popup-create" className="mt-40" onClick={setLocalStorage}>Add Popup List</button>
                {
                    width ? 
                    <div id="popup" className="mt-140" style={{width: + width + "px", height: + height + "px", position: "relative", backgroundColor: popBgColor}} >
                    <span  style={{position: "absolute", left: horizontalTitle + "px", top: verticalTitle + "px", color: popTitleTextColor}}> { title ? title : "Title"}</span>
                    </div> 
                    : 
                    <></>
                }
                
        </div>
    </div>
    
  )
}

export default Popup