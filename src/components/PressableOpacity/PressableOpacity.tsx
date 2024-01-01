import React, { useRef } from 'react';
import { Animated, GestureResponderEvent, Pressable, PressableProps } from 'react-native';

type Props = PressableProps & {
  activeOpacity?: number;
  children?: React.ReactNode;
}

export function PressableOpacity({activeOpacity=0.2, children, onPressIn, onPressOut, ...rest}:Props) {
  const opacity = useRef(new Animated.Value(1)).current;

  const _onPressIn = (event: GestureResponderEvent) => {
    onPressIn && onPressIn(event);

    Animated.timing(opacity, {
      toValue: activeOpacity,
      duration: 200,
      useNativeDriver: true
    }).start();
  };

  const _onPressOut = (event:GestureResponderEvent) => {
    onPressOut && onPressOut(event);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  };

  return (
    <Animated.View style={{ opacity }}>
    <Pressable 
      onPressIn={_onPressIn} 
      onPressOut={_onPressOut} 
      hitSlop={{
        left:200
      }}
      {...rest}>
        {children}
    </Pressable>
    </Animated.View>
  );
}