import { useRef, useState} from 'react'
function PopupList() {
  let localPopData = JSON.parse(localStorage.getItem('popup'))
  const [active, setActive] = useState(false);
  let cellRef = useRef([]);

  function handleCell (index) {
    setActive(!active);
    if(cellRef.current[index].style.display === "none"){
      cellRef.current[index].style.display="block";
    }else {
      cellRef.current[index].style.display="none";
    }
  }

  return (
    <div className="popup-list-container" style={{ marginLeft: "25%", width: "64%"}}>
      <table style={{width: "100%"}}>
    {
    localPopData && localPopData.map((item, index) => {
        return(
          <div key={index}>
              <tr>
                <th className="table-item-title">Title</th>
                <th className="table-item-creation-date">Creation date</th>
                <th>Show</th>
              </tr>
              <tr>
                <td>
                  { item.title ? item.title : "Title"}
                  <div id="popup" ref={(ele)=> cellRef.current[index] = ele} className="mt-140 mr-40" style={{display: "none", width: + item.width + "px", height: + item.height + "px", backgroundColor: item.bgColor, position: "absolute", margin: "0 auto", left: "0", right: "0"}} >
                      <span style={{position: "absolute", left: item.titleAlignmet + "px", color: item.titleColor, top: item.titleVerticalAlignmet + "px"}}> { item.title ? item.title : "Title"}</span>
                  </div>
                </td>
                <td>
                  {item.creationDate}
                  
                </td>
                <td><button onClick={()=> handleCell(index)}> { active ? "Hide" : "Show"}</button></td>
              </tr>
              <tr>
              </tr>
            
          </div>
          
          )
    })
  }
  </table>
    </div>
  )
}
export default PopupList