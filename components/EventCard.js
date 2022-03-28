import React from "react";
import { View,Text , FlatList, TouchableOpacity, SectionList} from "react-native";
import { CardView , BulletTitle, IconText, BulletView, IconView} from '../styles/monitoringStyles';


export default EventCard = ({eventList, navigation})=>{

    
    
    
        

    
    return(
        
        <SectionList
        ListHeaderComponent={
            <BulletTitle>EVENTOS</BulletTitle>
        }
         renderItem={renderEventCard}
        />
        
                      
    )       
   
}
/*     watering:{

        quantity: 1,
        ph: 5.9,
    },
    fertilizer:{

        type:"vegetacion",
        name:"DrBanner VEGE",
        ammount: "3ml"
    },
    crop:{
        type:null,
        description:null,
    },
    meassures:{
        ph:null,
        ec:null,
        nodal_distance:null,
        height:null,

    }
*/