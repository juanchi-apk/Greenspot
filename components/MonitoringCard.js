import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

import { 
    StyledMonitoringCard, 
    StyledMonitoringImage , 
    StyledMonitoringTitle, 
    StyledDataRow,
    RowTittle,
    RowContent
} from '../styles/monitoringStyles';

export default function MonitoringCard({data, onPress}) {


  
    return (
        <StyledMonitoringCard onPress = {onPress}>
            <StyledMonitoringImage source = {data.image}/>
        
            <View style={styles.infoContainer}>
            <Text>{`Seguimiento N° ${data.crop_id} - ${data.dateOfBirth}`}</Text>
            <StyledMonitoringTitle>{data.strainDetails.name} </StyledMonitoringTitle>
            
            <StyledDataRow>
            <RowTittle >GENETICA MADRE: </RowTittle>
            <RowContent>{data.strainDetails.genetic}</RowContent>
            </StyledDataRow>
            
            <StyledDataRow>
            <RowTittle>TIPO DE CULTIVO: </RowTittle>
            <RowContent >{data.soil}</RowContent>
            </StyledDataRow>
            
            <StyledDataRow>

            <RowTittle >CAPACIDAD DE MACETA: </RowTittle>
            <RowContent >{data.currentPotCapacity} lts.</RowContent>
            
            </StyledDataRow>
            <StyledDataRow>

            <RowTittle>SUPERFICIE: </RowTittle>
            <RowContent >{data.surface}</RowContent>
            
            </StyledDataRow>
            
            </View>
    </StyledMonitoringCard>
  );
}
const styles = StyleSheet.create({
    
  infoContainer: {
    padding: 10,
  },

});