import React from 'react'
// import ReactTooltip from 'react-tooltip';
import { Tooltip as ReactTooltip} from 'react-tooltip';
import '../Tooltip.css'
import ReactSimpleTooltip from "react-simple-tooltip"


const Products = ({data}) => {
  return (
    // <div data-tooltip-id={"tooltip" + data?.id} data-tooltip-content={data?.description}>
    //     <div className="product">
    //         <span className="product-name">{data?.name}</span>
    //         <span className="product-price">{data?.price}</span>
    //         <ReactTooltip id={"tooltip" + data?.id} />
    //     </div>
    // </div>
    <>
    <div>
      <span>{data?.name} - {data?.price}</span>
    </div>
    <ReactSimpleTooltip
    id={data?.name}
  arrow={15}
  background="#000"
  border="#000"
  color="#fff"
  content={data?.description}
  fadeDuration={0}
  fadeEasing="linear"
  fixed={false}
  fontFamily="inherit"
  fontSize="inherit"
  offset={0}
  padding={16}
  placement="top"
  radius={0}
  zIndex={1}
>
  <ReactSimpleTooltip>
    Description
  </ReactSimpleTooltip>
</ReactSimpleTooltip>
   </>
  )
};



export default Products