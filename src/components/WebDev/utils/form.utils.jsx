const getRandomLetter = () => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  const getRandomLowercase = () => {
    let charset = "abcdefghiklmnopqrstuvwxyz";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  const getRandomUppercase = () => {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  
  const getRandomNumber = () => {
    let charset = "0123456789";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  
  const getRandomSymbol = () => {
    let charset = "[]{}?!|-_*#^/()&%$£";
    let randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };
  
  const generatePassword = ( hasLowercase = false, hasUppercase = false, hasNumber = false, hasSymbol = false, len = 6) => {
    let functionSet = [getRandomLetter];
  
    functionSet = hasLowercase ? [...functionSet, getRandomLowercase] : functionSet;
    functionSet = hasUppercase ? [...functionSet, getRandomUppercase] : functionSet;
    functionSet = hasNumber ? [...functionSet, getRandomNumber] : functionSet;
    functionSet = hasSymbol ? [...functionSet, getRandomSymbol] : functionSet;
  
    let password = [];
    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * functionSet.length);
      let character = functionSet[randomIndex]();
      password.push(character);
    }
  
    return password.join("");
  };
  
  export { generatePassword };
  