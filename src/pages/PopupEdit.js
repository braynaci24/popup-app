import { useState } from 'react'
import { useParams } from "react-router-dom";

function PopupEdit() {
    let { PopupId } = useParams();
    let localPopData = JSON.parse(localStorage.getItem('popup'))
    let [data, setData] = useState(localPopData);
    let [newWidth, setNewWidth] = useState();
    let [newHeight, setNewHeight] = useState();
    let [newTitle, setNewTitle] = useState();
    let [newColor, setNewColor] = useState();
    let [newTitleColor, setNewTitleColor] = useState();
    let [newTitlePostHorz, setNewTitlePostHorz] = useState();
    let [newTitlePosVert, setNewTitlePostVert] = useState();

    const newEditItem = () => {
        const newState = data.map(item => {
          console.log(item)
          if (item.id === Number(PopupId)) {
            return {...item, width: newWidth ? newWidth : item.width, height: newHeight ? newHeight : item.height, title: item.title ? item.title : newTitle, color: newColor, titleColor: newTitleColor, titleVerticalAlignmet: item.titleVerticalAlignmet ? item.titleVerticalAlignmet : newTitlePostHorz,
                    titleHorizAlignmet: item.titleAlignmet ? item.titleAlignmet : newTitlePosVert};
          }
          return item;
        });
        setData(newState);
        localStorage.setItem('popup', JSON.stringify(newState));
      };
      
    return (
    <div style={{ marginLeft: "25%", width: "64%"}}>
        {
          <div>
            <div className="mt-70">
            <div id="popup-controller" className="grid">
                <div className="flex">
                    <span className="mr-10">Width</span>
                    <input type="number" className="popup-admin-input pl-10" onChange={editWidth => setNewWidth(editWidth.target.value)} />
                </div>
                <div className="flex">
                    <span className="mr-10">Height</span>
                    <input type="number" className="popup-admin-input pl-10" onChange={editHeight => setNewHeight(editHeight.target.value)}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Title</span>
                    <input type="text" className="popup-admin-input pl-10" onChange={editTitle => setNewTitle(editTitle.target.value)}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Color</span>
                    <input type="color" className="popup-admin-color pl-10" onChange={editColor => setNewColor(editColor.target.value)}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Title Color</span>
                    <input type="color" className="popup-admin-color pl-10"  onChange={editTitleColor => setNewTitleColor(editTitleColor.target.value)}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Title Position Horizontal</span>
                    <input type="range" id="points" name="points" min="0"  max="100" onChange={editTitlePostHorz => setNewTitlePostHorz(editTitlePostHorz.target.value)}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Title Position Vertical</span>
                    <input type="range" id="points" name="points" min="0" max="100"onChange={editTitlePostVert => setNewTitlePostVert(editTitlePostVert.target.value)}/>
                </div>
                <div className="flex">
                    <span className="mr-10">Popup Status</span>
                    <select>
                        <option>Active</option>
                        <option>Passive</option>
                    </select>
                </div>
                <button onClick={newEditItem}>Edit</button>
            </div>
            {
              data && data.map((item, index) => {
                if(item.id === Number(PopupId)){
                return(
                  <div key={index} id="" className="mt-140" style={{width: + item.width + "px", height: + item.height + "px", position: "relative", backgroundColor: item.bgColor}} >
                    <span  style={{position: "absolute", left: item.titleHorizAlignmet + "px", top: item.titleVerticalAlignmet + "px", color: item.titleColor}}> { item.title ? item.title : "Title"}</span>
                  </div> 
                )
                }
              })
            }
            </div>
          </div>
        }   
    </div>
  )
}

export default PopupEdit