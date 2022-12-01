/* import { useRef } from 'react' */
import {Link} from "react-router-dom"
function PopupList() {
  let localPopData = JSON.parse(localStorage.getItem('popup'))
/*   let refs = useRef([]); */
  /* const [currentPopup, setCurrentPopup] = useState() */

  /* function handleCell (index) {
    setCurrentPopup(index)
  } */

  return (
    <div className="popup-list-container" style={{ marginLeft: "25%", width: "64%"}}>
      <table style={{width: "100%"}}>
        <thead>
          <tr>
              <th className="table-item-title">Title</th>
              <th className="table-item-creation-date">Creation date</th>
              <th>Edit</th>
            </tr>
        </thead>
    {
    localPopData && localPopData.map((item, index) => {
      if(item.status === "Active") {
        return(
          <tr key={index}>
            <td>
              { item.title ? item.title : "Title"}
              {/* <div id="popup" ref={(ele)=> refs.current[index] = ele} className="mt-140 mr-40" style={{  display: currentPopup != index ? "none" : "block" , width: + item.width + "px", height: + item.height + "px", backgroundColor: item.bgColor, position: "absolute", margin: "0 auto", left: "0", right: "0"}} >
                  <span style={{position: "absolute", left: item.titleAlignmet ? item.titleAlignmet + "px" : 44 + "%", color: item.titleColor, top: item.titleVerticalAlignmet + "px"}}> { item.title ? item.title : "Title"}</span>
              </div> */}
            </td>
            <td>
              {item.creationDate}
            </td>
            <td><Link /* onClick={()=> handleCell(index)}  */ to={`popup/${item.id}`}>Show</Link></td>
          </tr>
      ) 
      }
       
    })
  }
  </table>
    </div>
  )
}
export default PopupList