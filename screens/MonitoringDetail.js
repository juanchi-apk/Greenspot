import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,FlatList, SectionList} from 'react-native';
import { getCropById } from '../services/monitoringService';
import { CardView , BulletTitle, IconText, BulletView, EventOpacity, IconView} from '../styles/monitoringStyles';
import  BulletCard  from '../components/BulletCard';
import EventCard from '../components/EventCard'

export default function MonitoringDetail({route, navigation}) {

const crop_id = route.params.crop_id;

const [crop, setCrop] = useState({});
const [strain, setStrain] = useState({})
const [flavourList,setFlavourList] = useState([]);
const [effectList,setEffectList] = useState([]);
const[eventList, setEventList] = useState()
  
useEffect(() => {
  
    const cropsData = getCropById(crop_id)
  
    setCrop(cropsData);
    setStrain(cropsData.strainDetails)
    setFlavourList(cropsData.flavourArray)
    setEffectList(cropsData.effectArray)
    setEffectList(cropsData.effectArray)
    setEventList(cropsData.cropEvents)
  
  },[]);
  function renderEventCard({item}){

    const {eventID} =  item;
    return(
    <TouchableOpacity
    key={item.eventID}
    onPress={ () => {
      navigation.navigate('EventDetail',{
       eventID: item.eventID
      })
    }}
    >
    <BulletCard isEvent={true} eventID={eventID}/>
    </TouchableOpacity>
    )
      
      }

  
    
  return (
   
          <FlatList
          style = {styles.maincontainer}

            ListHeaderComponent= {
              <>
                  <Image  
                      style={styles.image}
                       source={crop.image}
                  />
             
                <BulletTitle>DATOS DEL CULTIVO</BulletTitle>
            <CardView>
  <IconText >Nombre: {strain.name}</IconText>
  <IconText >Maceta: {crop.currentPotCapacity}lts</IconText>
  <IconText >Nacimiento: {crop.dateOfBirth}</IconText>
  <IconText >Tipo de Suelo: {crop.soil}</IconText>
  <IconText >Ambiente: {crop.surface}</IconText>
  </CardView>

  <BulletTitle>DATOS DE LA GENETICA</BulletTitle>
  <CardView>
  <BulletTitle>GENETICA MADRE</BulletTitle>
  <BulletView>
  <IconView>
  <IconText >{strain.genetic}</IconText>
  </IconView>
  </BulletView>
  </CardView>
  
  <CardView>
  <BulletTitle>CICLO TOTAL</BulletTitle>
  <BulletView>
  <IconView>
  <IconText >{strain.completeCicle}weeks</IconText>
  </IconView>
  </BulletView>
  </CardView>

  <CardView>
  <BulletTitle>PRODUCCION</BulletTitle>
  <BulletView>
  <IconView>
  <IconText >Interior</IconText>
  <IconText >{strain.minProdInt} - {strain.maxProdInt}gr</IconText>
  </IconView>
  <IconView>
  <IconText >Exterior</IconText>

  <IconText >{strain.minProdExt} - {strain.maxProdExt}gr</IconText>
  </IconView>
  </BulletView>
  </CardView>

  <CardView>
  <BulletTitle>COMPOSICION</BulletTitle>
  <BulletView>
  <IconView>
  <IconText >Satividad: {strain.satividad}%</IconText>
  </IconView>
  <IconView>
  <IconText >THC: {strain.thc}%</IconText>
  </IconView>
  </BulletView>
  </CardView>

  <CardView>
  <BulletTitle>TIPO</BulletTitle>
  <BulletView>
  <IconView>
  <IconText >{strain.type}</IconText>
  </IconView>
  </BulletView>
  </CardView>
 

  <BulletCard data={effectList} title="EFECTO"/>
  <BulletCard data={flavourList} title ="SABOR"/>   

  <BulletTitle>EVENTOS</BulletTitle>
        
              </>    
            }
             
            keyExtractor={item=>item.eventID}       
            data={eventList? eventList: []}
            renderItem={renderEventCard}
            
        />
          

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