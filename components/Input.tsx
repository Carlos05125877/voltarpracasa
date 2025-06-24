import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isPassword?: boolean;
  keyboardType?: 'default' | 'email-address';
};

 function Input({
  value,
  onChangeText,
  placeholder,
  isPassword = false,
  keyboardType = 'default',
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#333"
        secureTextEntry={isPassword && !showPassword}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.showSenhaButton}
          onPress={() => setShowPassword((v) => !v)}
        >
          <Text style={styles.showSenhaText}>{showPassword ? 'Ocultar' : 'Exibir'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 266,
    height: 55,
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    marginBottom: 0,
    paddingHorizontal: 0,
  },
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 10,
    fontSize: 20,
    color: '#333',
    backgroundColor: 'transparent',
    borderRadius: 4,
  },
  showSenhaButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  showSenhaText: {
    color: '#1056d9',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Input;