import React from 'react'
import './services.css'
import {contents,content2} from './card_content'


const Card =({data})=>{
    return(
        <div className='card card-wrap'>
            <img src={data.icon} width='80px' alt='services'/>
            <h4>{data.title}</h4>
            <p>{data.text}</p>
        </div>
    )
}
export default function Services() {
    return (
        <div className='container service-area'>
            <h3 className='section-caption'>Ensure your small business is covered</h3>
            <div className='services-wrapper'>
                {contents.map((item,index)=><Card key={index} data={item}/>)}
            </div>
            <div className='services-wrapper-2'>
                {content2.map((item,index)=><Card key={index} data={item}/>)}
            </div>
        </div>
    )
}


