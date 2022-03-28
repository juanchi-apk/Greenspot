import { IconText, IconView, BulletView, BulletTitle, CardView  } from '../styles/monitoringStyles';
import React, { useEffect, useState } from 'react';
import { getEventById } from '../services/monitoringService';


export default function BulletCard({data, title, isEvent, eventID}){
const [eventData, setEventData] = useState()
 
  useEffect(()=>{
    if(isEvent){
      const eventDetails = getEventById(eventID)
      setEventData(eventDetails.event)
  } 
    
  },[])

    return(
      <>
        {!isEvent && (
        <CardView>
        <BulletTitle>{title.toUpperCase()}</BulletTitle>
        <BulletView>
          
          {data.map( (element, index) => { 
          return( 
          <IconView key={index} >
          {element.icon}
          <IconText >{element.text}</IconText>
        </IconView>) 
          })}
        </BulletView>
        </CardView>
          )}
        {isEvent && (
        <CardView>
        <BulletTitle>{eventData&&eventData.cropEventDate}</BulletTitle>
        <BulletView>
          
          {eventData&&eventData.type.map( (element, index) => { 
          return( 
          <IconView key={index} >
          {element.icon}
          <IconText >{element.text}</IconText>
        </IconView>) 
          })}
        </BulletView>
        </CardView>
          
        ) }
    </>
    )

}