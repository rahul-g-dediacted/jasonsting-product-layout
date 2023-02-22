import React from 'react'
// import ReactTooltip from 'react-tooltip';
import { Tooltip as ReactTooltip} from 'react-tooltip';



const Products = ({data}) => {
  return (
    <div data-tooltip-id={"tooltip" + data?.id} data-tooltip-content={data?.description}>
        <div className="product">
            <span className="product-name">{data?.name}</span>
            <span className="product-price">{data?.price}</span>
            <ReactTooltip id={"tooltip" + data?.id} />
        </div>
    </div>
  )
};



export default Products