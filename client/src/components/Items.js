import React from 'react'
function Elemen(props){
    return <li>{props.item}</li>
}

const Items = ({MapLis}) => {
    const Array = MapLis.map((val)=><Elemen item={val} />)
    return (
        <div>
           
                {Array}
           
        </div>
    )
}
export default Items


