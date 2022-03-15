//tema de cores do aplicativo, cores globais

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {

    colors: {
        primary: '#5636D3',
        secondary: '#976F91',
        secondary_light: '#526A9A',

        success: '#12A454',
        success_light: 'rgba(18,164,84, 0.5)',

        attention: '#E83F5B',
        attetion_light: 'rgba(232,63,91, 0.5)',

        shape: '#FFFFFF',
        title: '#363F5F',

        text: '#969CB2',
        background: '#F0F2F5'
    },
    fonts: {
        regular: 'Poppins_400Regular',
        medium:'Poppins_500Medium',
        bold:'Poppins_700Bold'
    },
   metrics:{
        baseMargin: 10,
        basePadding: 20,
        baseRadius: 3,
        fontsizeInput: 12,
        screenWidth: width < height ? width : height,
        screenHeight: width < height ? height : width
    }
};

