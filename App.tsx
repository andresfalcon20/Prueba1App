import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { PruebaScreen } from './src/screens/PruebaScreen';
import { ModeloCajaScreen1 } from './src/screens/ModeloCajaScreen1';
import { ModeloCajaScreen2 } from './src/screens/ModeloCajaScreen2';
import { ModeloCajaScreen3 } from './src/screens/ModeloCajaScreen3';
import { ModeloCajaScreen4 } from './src/screens/ModeloCajaScreen4';
import { ModeloCajaScreen5 } from './src/screens/ModeloCajaScreen5';
import { ModeloCajaScreen6 } from './src/screens/ModeloCajaScreen6';
import { ModeloCajaScreen7 } from './src/screens/ModeloCajaScreen7';

export const App = () =>{
  return (
    <SafeAreaView style = {{flex: 1}}>
      
{/* <PruebaScreen/> */}
{/* <ModeloCajaScreen1/> */}

{/* <ModeloCajaScreen2/>*/}  
{/* <ModeloCajaScreen3/>*/}  
{/* <ModeloCajaScreen4/>*/}  
{/* <ModeloCajaScreen5/>*/}  
{/* <ModeloCajaScreen6/>*/}  

<ModeloCajaScreen7/>


 </SafeAreaView>
  );
}
export default App;