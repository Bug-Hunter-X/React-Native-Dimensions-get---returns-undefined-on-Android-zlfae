```javascript
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const DimensionsBugSolution = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleDimensionsChange = (dimensions) => {
      setWindowWidth(dimensions.window.width);
      setWindowHeight(dimensions.window.height);
    };

    Dimensions.addEventListener('change', handleDimensionsChange);
    handleDimensionsChange(Dimensions.get('window')); // Initial value

    return () => {
      Dimensions.removeEventListener('change', handleDimensionsChange);
    };
  }, []);

  if (windowWidth === 0 || windowHeight === 0) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View style={[styles.container, { width: windowWidth, height: windowHeight } ]}>
      <Text>Width: {windowWidth}</Text>
      <Text>Height: {windowHeight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DimensionsBugSolution;
```