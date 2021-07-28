import React from 'react'
import "../App.css"
function Elemen(props){
    return (
        <table style={{width:"100%"}}>
            
        <tr>
            <td>
            {props.item}
            </td>
        </tr>
        </table>
    )
}

const Items = ({MapLis,head}) => {
    const Array = MapLis.map((val)=><Elemen item={val}  />)
    return (
        <div>
        {/*   <table style={{width:"50%"}}>
           <tr>
                <th>
                    {head}
                </th>
    </tr>  
           </table> */}
                {Array}
           
        </div>
    )
}
export default Items


