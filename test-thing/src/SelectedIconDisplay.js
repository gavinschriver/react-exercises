import React from "react"

export default (props) => {
    const {selected} = props
    return selected.map(i => <div style={{display: `flex`}}><div>{i.name}</div><div onClick={() => deselect(i.id)}>-</div></div>)
}