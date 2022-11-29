import { useRef } from 'react'
function PopupList() {
  let localPopData = JSON.parse(localStorage.getItem('popup'))
  let refs = useRef([]);
  
  function handleCell (index) {
    let popupDiv = refs.current[index];
    
    if(popupDiv.style.display === "none"){
      popupDiv.style.display="block";
    }else {
      popupDiv.style.display="none";
    }
  }

  return (
    <div className="popup-list-container" style={{ marginLeft: "25%", width: "64%"}}>
      <table style={{width: "100%"}}>
        <thead>
          <tr>
              <th className="table-item-title">Title</th>
              <th className="table-item-creation-date">Creation date</th>
              <th>Show</th>
            </tr>
        </thead>
    {
    localPopData && localPopData.map((item, index) => {
        return(
              <tr key={index}>
                <td>
                  { item.title ? item.title : "Title"}
                  <div id="popup" ref={(ele)=> refs.current[index] = ele} className="mt-140 mr-40" style={{display: "none", width: + item.width + "px", height: + item.height + "px", backgroundColor: item.bgColor, position: "absolute", margin: "0 auto", left: "0", right: "0"}} >
                      <span style={{position: "absolute", left: item.titleAlignmet + "px", color: item.titleColor, top: item.titleVerticalAlignmet + "px"}}> { item.title ? item.title : "Title"}</span>
                  </div>
                </td>
                <td>
                  {item.creationDate}
                </td>
                <td><button onClick={()=> handleCell(index)}>Show</button></td>
              </tr>
          )
    })
  }
  </table>
    </div>
  )
}
export default PopupList