import { createStackNavigator } from 'react-navigation';
import TabNavigator from './main_screens/TabNavigator'
import ProductDetails from './main_screens/screens/ProductDetails'
import ProfileDetails from './main_screens/screens/ProfileDetails'
import EditProfile from './main_screens/screens/EditProfile'
import CreateProduct from './main_screens/screens/CreateProduct'
import EditProduct from './main_screens/screens/EditProduct'

const MainScreen = createStackNavigator({
    TabNavigator:{
        screen:TabNavigator,
        navigationOptions: ({ navigation }) => ({
            header: null,
        }),
    },
    ProfileDetails:{
        screen:ProfileDetails,
    },
    ProductDetails:{
        screen:ProductDetails,
    },
    EditProfile:{
        screen:EditProfile,
        navigationOptions: ({ navigation }) => ({
            title: 'Edição do perfil',
        }),
    },
    CreateProduct:{
        screen:CreateProduct,
        navigationOptions: ({ navigation }) => ({
            title: 'Criação de produto',
        }),
    },
    EditProduct:{
        screen:EditProduct,
        navigationOptions: ({ navigation }) => ({
            title: 'Edição de produto',
        }),
    },
});

export default MainScreen;