import React from 'react'
import { useParams } from "react-router-dom";

function PopupEdit() {
    let { PopupId } = useParams();

    return (
    <div style={{ marginLeft: "25%", width: "64%"}}>
        ID: { PopupId }
    </div>
  )
}

export default PopupEdit