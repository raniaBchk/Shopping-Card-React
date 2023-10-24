import React from 'react'
import {storeItems} from '../data/storeItems'
import { Col, Row } from 'react-bootstrap'
import StoreItem from '../StoreItem/StoreItem'


const Store = () => {
   
  return (
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">

    {
        storeItems.length > 0 ? (
            storeItems.map((item)=>{return(
                
                <Col key={item.id}>
                <StoreItem {...item} />
                </Col>
                
            )
            })
        ):(<h2>no item </h2>)
    }
    
    </Row>
    </>
  )
}

export default Store