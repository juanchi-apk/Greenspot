import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { getEventById } from "../services/monitoringService";
import { CardView , BulletTitle, IconText, BulletView, EventOpacity, IconView} from '../styles/monitoringStyles';

export default function EventDetails({ route }) {


    const [eventInfo, setEventInfo] = useState([])
    const [eventType, setEventType] = useState([])


    useEffect(() => {

        const eventByID = getEventById(route.params.eventID)
        setEventInfo(eventByID.event)
        setEventType(eventByID.event.type)
        
        
    }, [])

 
    function renderData({ item }) {

        const eventDataDetails =[];

        for (const eventKey in eventInfo){
                if(eventKey == item.text){
                    for(const info in eventInfo[eventKey]){
                        
                        
                        eventDataDetails.push({
                            [info] : eventInfo[eventKey][info] 
                        })       
                    }
                }else{
                    continue;
                }

            }
    
        return(
            
            <CardView>
            {(eventDataDetails.length>0)&&(
                <>
                <BulletTitle>{item.text.toUpperCase()}</BulletTitle>
                <FlatList
                data={eventDataDetails}
                keyExtractor={(item, index)=>index}   
                renderItem = {({item})=>{
                    let nametitle;
                    let description;
                    for (const key in item) {
                        nametitle = key
                        description = item[key]
                    }
                    return(
                        <IconText>{nametitle}: {description}</IconText>
                    )                   
                }}
                />
                </>
            )}
            </CardView>
            )    
        }

    return (
    <>
        {eventInfo && (
       
                <View style={styles.maincontainer}>
                <FlatList
                    
                    ListHeaderComponent={
                        <CardView>
                            <BulletTitle>{`${eventInfo.cropEventDate}`.toUpperCase()}</BulletTitle>
                            {(eventInfo.cropDetails==null)&&<IconText> SIN NOTAS</IconText>}
                            {(eventInfo.cropDetails!=null)&&<IconText> Notas: {eventInfo.cropDetails}</IconText>}
                        </CardView>
                    }
                    data={eventType}
                    keyExtractor = {(item, index)=>index}
                    renderItem={renderData}
                />
           
                    

                </View>
                )}

</>
    )
}
const styles = StyleSheet.create({
 
    maincontainer:{marginTop:30},
    image: {
      height: 300,
      width: '100%'
    },
    infoContainer: {
      padding: 16,
    },
  
  });