import { Game } from "@/app/components";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const App = () => {
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Game />
    </GestureHandlerRootView>
  )
}

export default App