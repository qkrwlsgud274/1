export default class SignInScreen extends Component {

    // (...)
  
    // 스팀커넥트 성공
    _onSteemconnectSuccess = (tokens) => {
      this.setState({ modalVisible: false }, () => {
        this._signInAsync(tokens.access_token);
      });
    }
  
    // 인증 정보 저장
    _signInAsync = async (userToken) => {
      await AsyncStorage.setItem('userToken', userToken);
      this.props.navigation.navigate('App');
    };
  
    render() {
      // (...)
    }
  }