export const containOnlyAZNumber = (text) => {
  const removeSpacesLower = text.replaceAll(" ", "").toLowerCase();

  for (let i = 0; i < removeSpacesLower.length; i++) {
    const char = removeSpacesLower[i];
    if (!((char >= "a" && char <= "z") || (char >= "0" && char <= "9"))) {
      return false;
    }
  }
  return true;
};

export const containOnlyNumber = (text) => {
  for (let index = 0; index < text.length; index++) {
    if (text[index] < "0" || text[index] > "9") {
      return false;
    }
  }

  return true;
};

export const containOnlyLetters = (text) => {
  const removeSpacesLower = text.replaceAll(" ", "").toLowerCase();

  for (let index = 0; index < text.length; index++) {
    if (removeSpacesLower[index] < "a" || removeSpacesLower[index] > "z") {
      return false;
    }
  }

  return true;
};

export const validateName = (name) => {
  if (name.length > 100) {
    return false;
  }

  if (!containOnlyLetters(name)) {
    return false;
  }

  return true;
};

export const validateEmail = (email) => {
  const emailsContain = ["gmail.com", "hotmail.com", "meusite.com.br"];

  if (email.indexOf("@") === -1) {
    return false;
  }

  const emailSplited = email.split("@");

  if (
    !containOnlyAZNumber(emailSplited[0]) ||
    emailSplited[0].length < 6 ||
    emailSplited[0].length > 30
  ) {
    return false;
  }

  if (!emailsContain.includes(emailSplited[1])) {
    return false;
  }

  return true;
};

export const validatePhone = (phone) => {
  if (phone.length > 13 || phone.length < 8 || !containOnlyNumber(phone)) {
    return false;
  }

  return true;
};
