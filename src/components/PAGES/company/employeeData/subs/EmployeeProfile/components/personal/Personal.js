import React from 'react'
import CardDisplay from './CardDisplay'

export default function Personal() {
    return (
        <>
        <div className='mb-4'>
            <CardDisplay title="Basic Info"/>
        </div>
        <div className='mb-4'>
            <CardDisplay title="Contact Info"/>
        </div>
        <div className='mb-4'>
            <CardDisplay title="Address Info"/>
        </div>
        <div className='mb-4'>
            <CardDisplay title="Emergency Contact"/>
        </div>
        </>
    )
}
