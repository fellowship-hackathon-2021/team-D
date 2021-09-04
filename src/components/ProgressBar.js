import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';

const MyComponent = () => (
  <ProgressBar style={{marginTop: 300}}progress={10.0} color={Colors.red800} />
);

export default MyComponent;
