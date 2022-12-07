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