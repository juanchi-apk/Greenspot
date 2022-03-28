import * as Font from "expo-font";
 
export default useBrandFonts = async () =>
  await Font.loadAsync({
    'BrandCreeper': require('./../assets/fonts/Creepster-Regular.ttf'),
  });
  