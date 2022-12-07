import { useState } from 'react'
import { useParams } from "react-router-dom";

function PopupEdit() {
    let { PopupId } = useParams();
    let localPopData = JSON.parse(localStorage.getItem('popup'))
    let [newWidth, setNewWidth] = useState();
    const [data, setData] = useState(localPopData);

    const newEditItem = () => {
        const newState = data.map(item => {
          if (item.id === Number(PopupId)) {
            return {...item, width: newWidth};
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
                    <input type="number" className="popup-admin-input pl-10" />
                </div>
                <div className="flex">
                    <span className="mr-10">Title</span>
                    <input type="text" className="popup-admin-input pl-10" />
                </div>
                <div className="flex">
                    <span className="mr-10">Color</span>
                    <input type="color" className="popup-admin-color pl-10" />
                </div>
                <div className="flex">
                    <span className="mr-10">Title Color</span>
                    <input type="color" className="popup-admin-color pl-10" />
                </div>
                <div className="flex">
                    <span className="mr-10">Title Position Horizontal</span>
                    <input type="range" id="points" name="points" min="0"  max="100" />
                </div>
                <div className="flex">
                    <span className="mr-10">Title Position Vertical</span>
                    <input type="range" id="points" name="points" min="0" max="100"/>
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
            </div>
          </div>
        }   
    </div>
  )
}

export default PopupEdit