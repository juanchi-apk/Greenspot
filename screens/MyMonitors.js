import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, ScrollView} from 'react-native';
import {getUserCrops} from '../services/monitoringService'
import  MonitoringCard  from '../components/MonitoringCard';


export default function MyMonitors({navigation}){
const [cropsData, setCropsData] = useState([]);

function renderMonitorings( {item: crop} ) {
    return (

      <MonitoringCard data={crop} 
        onPress={() => {
          navigation.navigate('MonitoringDetail',{
          crop_id: crop.crop_id
        })
        }}
      />
 
    );
  }
//DATA CROSSING BETWEEN CROPS AND STRAINS
/* Esto se va a armar en el backend, pero lo mockupeo para poder armar el front. Aca es cuando se cruzan los datos de los cultivos con los datos de las geneticas. Por ahora ver archivo datamockup.js */
  useEffect(() => {
    setCropsData(getUserCrops());
  });
  
  return(
        <FlatList
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(crop) => crop.crop_id.toString()}
            data={cropsData}
            renderItem={renderMonitorings}
      />
    );
  }

  const styles = StyleSheet.create({
    productsList: {
      backgroundColor: '#eeeeee',
    },
    productsListContainer: {
      backgroundColor: '#eeeeee',
      paddingVertical: 8,
      marginHorizontal: 8,
    }
  })





