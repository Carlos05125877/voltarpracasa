import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Input from '../../components/Input';
import LogoSvg from '../../components/LogoSvg';

 function LoginScreen(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);

  function handleEntrar() {
    Alert.alert('Login', `Email: ${email}\nSenha: ${senha}`);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <LogoSvg style={styles.logo} />
          
          <Text style={styles.title} numberOfLines={1}>
            Voltar pra Casa
          </Text>
          <View style={styles.inputBox}>
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputBox}>
            <Input
              value={senha}
              onChangeText={setSenha}
              placeholder="Senha"
              isPassword
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonBox} onPress={handleEntrar}>
              <View style={styles.buttonContent}>
                <Text style={styles.buttonText} numberOfLines={1}>
                  ENTRAR
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.registerText} numberOfLines={1}>
            Cadastre-se
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#ffffff',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  innerContainer: {
    display: 'flex',
    width: 302,
    height: "100%",
    flexDirection: 'column',
    gap: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: "auto",
  },
  logo: {
    width: 100,
    height: 100,
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  },
  title: {
    height: 44,
    alignSelf: 'stretch',
    flexShrink: 0,
    fontFamily: 'Open Sans',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 43.578,
    color: '#1056d9',
    position: 'relative',
    textAlign: 'center',
    zIndex: 2,
  },
  inputBox: {
    display: 'flex',
    width: 290,
    height: 55,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 3,
    marginBottom: 0,
  },
  input: {
    height: 54,
    width: '100%',
    paddingHorizontal: 10,
    fontSize: 20,
    fontFamily: 'Open Sans',
    color: '#333',
    backgroundColor: 'transparent',
    borderRadius: 4,
  },
  senhaInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  buttonContainer: {
    display: 'flex',
    width: 302,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 11,
  },
  buttonBox: {
    display: 'flex',
    width: 230,
    height: 55,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    backgroundColor: '#0f56d9',
    borderRadius: 20,
    position: 'absolute',
    top: -0.5,
    left: 36,
    overflow: 'hidden',
    zIndex: 12,
  },
  buttonContent: {
    display: 'flex',
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 10,
    paddingLeft: 24,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 13,
  },
  buttonText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  registerText: {
    height: 24,
    alignSelf: 'stretch',
    flexShrink: 0,
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24,
    color: '#003bab',
    position: 'relative',
    textAlign: 'center',
    zIndex: 15,
  },
});
export default LoginScreen;