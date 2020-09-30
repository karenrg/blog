import React from 'react'
import {Card, Row, Image, Col } from 'antd';


function Post (props) {
    return ( 
        
        <Col span={8}><Card title={props.post.title} bordered={true}>
        <Image               height={180} style={{}}
        src={props.post.image_url} /> <br></br><a href="url" >Ver receta</a>
 </Card></Col>

    )
}

export default Post;