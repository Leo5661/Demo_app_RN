import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const bottomNavBarTheme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent',
  },
};

function App(): JSX.Element {
  return (
    <GestureHandlerRootView className="flex-grow">
      <BottomSheetModalProvider>
        <PaperProvider theme={bottomNavBarTheme}>
          <RootNavigator />
        </PaperProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
