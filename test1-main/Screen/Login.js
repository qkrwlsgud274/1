export default ({ route, navigation }) => {
    const updateRequired = route?.params?.updateRequired;
    const userName = route?.params?.userName;
    const password = route?.params?.password;
  
    const userNameInput = useInputV2("");
    const passwordInput = useInputV2("");
  
    if(updateRequired === true) {
      userNameInput.setValue(userName);
      passwordInput.setValue(password);
      route.params.updateRequired = false;
    }
    
    
  }