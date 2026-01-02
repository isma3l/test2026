import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';
import { useState } from 'react';
import CloseIcon from '../assets/images/CloseIcon';

export function Input() {
  const [value, setValue] = useState('');
  const [isFocused, setFocused] = useState(false);

  const showPlaceHolder = isFocused || value.length > 0;
  const showClearIcon = isFocused;

  const onClear = () => {
    setValue('');
  };

  return (
    <View style={styles.container}>
      {showPlaceHolder && (
        <Text style={styles.labelText}>Correo electrónico</Text>
      )}
      <TextInput
        placeholder={isFocused ? '' : 'Escribe tu correo electrónico'}
        placeholderTextColor="#7876B1"
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {showClearIcon && (
        <Pressable
          style={styles.icon}
          onPress={onClear}
          onTouchStart={e => e.stopPropagation()}
        >
          <CloseIcon width={25} height={25} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  test: { color: 'red' },
  container: {
    position: 'relative',
  },
  input: {
    borderWidth: 2,
    borderColor: '#1D1C47',
    borderRadius: 16,
    backgroundColor: '#141534',
    color: 'white',
    padding: 16,
    height: 60,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 18,
  },
  labelText: {
    color: '#7D77FF',
    fontSize: 10,
    position: 'absolute',
    top: 8,
    left: 16,
    zIndex: 100,
  },
});
