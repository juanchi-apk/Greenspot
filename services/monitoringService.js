import * as VIcons from '@expo/vector-icons';
import { Colors } from '../styles/brandPallete';

const {primary, secondary,terciary, darkLight, brand , green, red} = Colors

//LAS STRAINS YA ESTAN PASADAS AL BACKEND.
export  const strains =[
        {
         id:1,
         name: "Dream Team",
         genetic: "Lemon Skunk + Super Silver Haze",
         satividad: "80%", //is also a string
         thc: "19",//on Api must be expressed as a string
            //Esto lo tengo que agregar a lo ultimo.
         type : "feminized" ,//Auto, Fem, Reg, Custom, Breed(Male) (This should be an automatic choise)
         
         minProdInt: 450 ,//on api must be expressed as integer ( Gr/m2)
         maxProdInt: 700 ,
         minProdExt: 1000 ,
         maxProdExt: 1200 ,//Integer(Gr/plant)
         completeCicle: 12, //(expressed in weeks, should be transform to days on api to control total of cicle, and such.) 
         effect: "Psichodelic, Euphoria", //
         flavour:"Lemony , Insciense , Peppery", //  
        },
        {   
            id:2,
            name: "Gorilla Glue Faster",
            genetic: "Gorilla Glue #4",
            satividad: "70%",
            thc: "24",
            type : "Regular" ,
            minProdInt: 500 ,
            maxProdInt: 600 ,
            minProdExt: 700 ,
            maxProdExt: 700 ,
            completeCicle: 6 , 
            effect: "Narcotic, Euphoria", 
            flavour:"Damp Earth, Chocolate",  
        },
        {
            id:3,
            name: "Blueberry XXL Auto",
            genetic: "Blueberry Auto",
            satividad: "20",
            thc: "20",
            type : "Auto" ,
            minProdInt: 450 ,
            maxProdInt: 500 ,
            minProdExt: 150 ,
            maxProdExt: 200 ,
            completeCicle: 11 ,
            effect: "Brain Uprise, Relaxation", 
            flavour:"Raspberries , Blueberries",  
        },
        {
            id: 4,
            name: "Blueberry XXL Auto",
            genetic: "Blueberry Auto",
            satividad: "20",
            thc: "20",
            type : "Auto" ,
            minProdInt: 450 ,
            maxProdInt: 500 ,
            minProdExt: 150 ,
            maxProdExt: 200 ,
            completeCicle: 11 ,
            effect: "Brain Uprise, Relaxation", 
            flavour:"Raspberries , Blueberries",  
        },
    ]


/*IMPORTANTE:
No está todo terminado, pero estan precargados por lo menos los dos tipos principales de luz, y los de tipo
de suelo, se cargan automaticamente al backend cuando se inicia la base de datos.
Lo idea es que eso sea lo que pase con algunos modelos definidos, y que se puedan agregar suelos custom, cada usuario puede agregar ingredientes, cantidades, y asi otros usuarios pueden ver qué hizo.



Para terminar de migrar FALTA:

-Imagenes, por ahora, supongo que las voy a seleccionar desde el formulario y las voy a pasar al backend, las voy a enviar como blob , y las voy a guardar en la app usando morgan .  No las voy a mandar a nube en primera instancia, total en tal caso es mas facil hacer un middleware o modificar después.

-el id de la genetica viene desde el front cuando inicia la aplicacion, traerme todos esos datos:
Strains,
Soils, 
Lights

-Por el momento voy a hacer lo  mismo con periodo, pero en realidad no tengo decidido como hacerlo, porque entiendo que lo idea seria que se guarde un campo para cuando haya una modificacion del periodo, asi quedan bien definidos los tiempos. Y tecnicamente, excepto las automaticas, todas arrancarian en vegetativo. Evaluar y modificar despues. 

CON ESO ESTARIA LISTO PARA PROBAR LA CARGA DEL PRIMER CROP. MIENTRAS ESTA EN DESARROLLO,  NO BORRAR COMENTAR Y EN TAL CASO MANDAR ABAJO DE TODO LAS VERSIONES CON LOS DATOS HARDCODEADOS EN EL FRONT , ES MAS FACIL QUE CLONAR UN COMMIT VIEJO Y MAS RAPIDO PARA CHEQUEAR ALGUNA FALLA.  
*/
export const crops = [
        {
            crop_id : 1,
            image: require('./../assets/imageservice/weedpic.jpg'),
            genetic_id: 1,
            surface: "Exterior",
            soil: "Living Soil",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:15,
            period: "Vegetativo"

        },
        {
            crop_id : 2,
            genetic_id: 3,
            image: require('./../assets/imageservice/weedpic2.jpg'),
            surface: "Indoor",
            soil: "FlowerPot",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:1,
            period: "Vegetativo"
        },
        {
            crop_id : 3,
            genetic_id: 4,
            image: require('./../assets/imageservice/weedpic2.jpg'),
            surface: "Indoor",
            soil: "Hydrophonic",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:7,
            period: "Pre-Flora"
        },
        {
            crop_id : 4,
            genetic_id: 2,
            image: require('./../assets/imageservice/weedpic.jpg'),
            surface: "Exterior",
            soil: "Regular Soil",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:5,
            period: "Flora"
        },
        {
            crop_id : 5,
            genetic_id: 2,
            image: require('./../assets/imageservice/weedpic.jpg'),
            surface: "Exterior",
            soil: "Regular Soil",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:5,
            period: "Flora"
        },
        {
            crop_id : 6,
            genetic_id: 2,
            image: require('./../assets/imageservice/weedpic.jpg'),
            surface: "Exterior",
            soil: "Regular Soil",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:5,
            period: "Flora"
        },
        {
            crop_id : 7,
            genetic_id: 2,
            image: require('./../assets/imageservice/weedpic.jpg'),
            surface: "Exterior",
            soil: "Regular Soil",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:5,
            period: "Flora"
        },
        {
            crop_id : 8,
            genetic_id: 2,
            image: require('./../assets/imageservice/weedpic.jpg'),
            surface: "Exterior",
            soil: "Regular Soil",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:5,
            period: "Flora"
        },
        {
            crop_id : 9,
            genetic_id: 2,
            image: require('./../assets/imageservice/weedpic.jpg'),
            surface: "Exterior",
            soil: "Regular Soil",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:5,
            period: "Flora"
        },
        {
            crop_id : 10,
            genetic_id: 2,
            image: require('./../assets/imageservice/weedpic.jpg'),
            surface: "Exterior",
            soil: "Regular Soil",
            dateOfBirth: "2022 Feb 02",
            initialPotCapacity: 1,
            currentPotCapacity:5,
            period: "Flora"
        },


    ]


export const Monitorings = [

        { 
            crop_id: 1,
            Days: 23,
            waterings:{
                id: 1,
                date: "18/02/2022",
                ammount: 1,
                fertilizers : {
                    registration_id:1,
                    used: true,
                    ammount: 5, //ml/l
                    name: "Homemade", //(select from list or blank)
                    P: 0,
                    K: 0,
                    N: 0,
                    observations: "Use my own mix, check next week",
                    
                }
            },
            crops: {

            },
            treatments:{

            }
    }]

export const Flavours = [
    {flavour:"Lemony", font: <VIcons.FontAwesome5 name="lemon" size={20} color={primary} /> },
    {flavour:"Insciense",font: <VIcons.FontAwesome name="fire" size={20} color={primary} />}, 
    {flavour:"Peppery",font:<VIcons.FontAwesome5 name="pepper-hot" size={20} color={primary} />},
    {flavour:"Damp Earth",font:<VIcons.MaterialCommunityIcons name="weather-rainy" size={20} color={primary} /> },    
    {flavour:"Chocolate", font:<VIcons.MaterialCommunityIcons name="food-croissant" size={20} color={primary} /> },
    {flavour:"Raspberries",font:<VIcons.FontAwesome5 name="raspberry-pi" size={20} color={primary} />},
    {flavour:"Blueberries",font:<VIcons.MaterialCommunityIcons name="fruit-grapes" size={20} color={primary} />},
]
export const Effects = [    
    {effect:"Psichodelic", font:<VIcons.MaterialIcons name="psychology" size={20} color={primary} /> },
    {effect:"Euphoria", font:<VIcons.MaterialCommunityIcons name="emoticon-excited-outline" size={20} color={primary} />},
    {effect:"Narcotic", font:<VIcons.MaterialCommunityIcons name="sleep" size={20} color={primary} />},
    {effect:"Brain Uprise", font:<VIcons.FontAwesome5 name="brain" size={20} color={primary} />},
    {effect:"Relaxation", font:<VIcons.FontAwesome name="bed" size={20} color={primary} />},
]

export const CropEvents = [
    {
    crop_id:1,
    eventID:1,
    cropEventDate: "Feb 7, 2022",
    eventImage:null,
    cropDetails:"Exceso de Nitrogeno",
    type: [
        {text: "watering", icon: <VIcons.MaterialCommunityIcons name="watering-can" size={20} color={primary}/>},
        {text:"fertilizer", icon: <VIcons.SimpleLineIcons name="energy" size={20} color={primary}/>}
    ],
    watering:{
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
},

{
    crop_id:1,
    eventID:2,
    cropEventDate: "Feb 8, 2022",
    cropDetails:null,
    type: [
        {text: "crop", icon:<VIcons.Entypo name="scissors" color={primary} size={20} />}, 
        {text: "meassures",icon:<VIcons.Entypo name="ruler" color={primary} size={20} /> }
    ],
    eventImage : null,
    watering:{
        quantity:null,
        ph:null
    },
    fertilizer:{
        type:null,
        name:null,
        ammount:null
    },
    crop:{
        type: "apical",
        description: "poda apical, se lastimó la planta",
    },
    meassures:{
        ph: 5.9,
        ec: 1500,
        nodal_distance:"3",
        height:"45",

    }
},
{
    crop_id:2,
    eventID:3,
    cropEventDate: "Feb 8, 2022",
    cropDetails:"Se partio una rama, y se hizo arreglo, chequear la proxima semana",
    type: [
        {text: "crop", icon:<VIcons.Entypo name="scissors" color={primary} size={20} />}, 
        {text: "watering", icon : <VIcons.MaterialCommunityIcons  name="watering-can" size={20} color={primary} />},
        ],
    eventImage:null,
    watering:{
        quantity:1,
        ph:6.2
    },
    fertilizer:{
        type:null,
        name:null,
        ammount:null
    },
    crop:{
        type: "LST",
        description: "Se sujetaron las ramas inferiores y se colocaron guias",
    },
    meassures:{
        ph:null,
        ec:null,
        nodal_distance:null,
        height:null,

    }
},
]

export const getUserCrops= function( ){

    
    for ( const crop of crops){
        
        for (const strain of strains) {
            if (crop.genetic_id == strain.id){
                crop.strainDetails = strain
            }
        }
    }
    return crops

}

export const getCropById= function( crop_id ){

    let findedCrop = {};

    for ( const crop of crops){

        if(crop.crop_id == crop_id){
            auxCrop = crop;
            findedCrop = auxCrop;

            for (const strain of strains) {
                if (findedCrop.genetic_id == strain.id){
                    findedCrop.strainDetails = strain;
                    let flavourArray = findedCrop.strainDetails.flavour.split(",");
                    let effectArray = findedCrop.strainDetails.effect.split(",");
                    let StrainsFlavoursArray = [];
                    let StrainsEffectsArray = [];

                    for (const flavour of flavourArray){
                        let trimmedFlavour =flavour.trim();
                        for(let strainFlavour of Flavours){
                            if(strainFlavour.flavour.trim() == trimmedFlavour){
                                StrainsFlavoursArray.push({
                                    text:trimmedFlavour,
                                    icon: strainFlavour.font
                                })
                            }
                        }

                    }
                    for (const effect of effectArray){
                        let trimmedEffect =effect.trim();
                        for(let strainEffect of Effects){
                            if(strainEffect.effect.trim() == trimmedEffect){
                                StrainsEffectsArray.push({
                                    text:trimmedEffect,
                                    icon: strainEffect.font
                                })
                            }
                        }
                    }
                    findedCrop.effectArray=StrainsEffectsArray.map(element=>{return element})
                    findedCrop.flavourArray=StrainsFlavoursArray.map(element=>{return element})
                }
            }
            findedCrop.cropEvents = []
            for (const cropEvent of CropEvents){
                
                 if(crop.crop_id == cropEvent.crop_id){
                   findedCrop.cropEvents.push(cropEvent)
                } 
            }

        }
    
    }

    return findedCrop;

}

export const getEventById =  (eventID)=>{
    let findedEvent ={}
    for(const event of CropEvents){
            if (event.eventID == eventID){
                findedEvent.event=event
            }
       }    

    return findedEvent

    }

