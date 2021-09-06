import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartScreen from '../screens/StartScreen';
import QuizIndex from '../screens/QuizIndex';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen'
import Dashboard from '../screens/Dashboard';
import Quiz from '../screens/Quiz'

const screens = {
    StartScreen: {
      screen: StartScreen
    },
    QuizIndex: {
      screen: QuizIndex
    },
    LoginScreen: {
        screen: LoginScreen
    },
    RegisterScreen: {
        screen: RegisterScreen
    },
    Dashboard: {
        screen: Dashboard
    },
    Quiz: {
        screen: Quiz
    }

   
}
const HomeStack = createStackNavigator(screens);
 
export default createAppContainer(HomeStack);


//   const pressHandler = () => {
//     navigation.navigate('QuizIndex')
//   }