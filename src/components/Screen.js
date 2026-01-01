import { useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Edges = 'top' | 'bottom' | 'left' | 'right';

interface Props extends ViewProps {
  children: React.ReactNode;
  edges?: Edges[];
  style?: StyleProp<ViewStyle>;
}

export const Screen = ({
  children,
  style,
  edges = ['top', 'bottom'],
}: Props) => {
  const insets = useSafeAreaInsets();

  const edgeStyle = useMemo(() => {
    return {
      paddingTop: edges?.includes('top') ? insets.top : 0,
      paddingBottom: edges?.includes('bottom') ? insets.bottom : 0,
    };
  }, [edges, insets.bottom, insets.top]);

  return <View style={[styles.container, style, edgeStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
