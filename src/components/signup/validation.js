class Validations {
  constructor({
    companyEmail,
    companyName,
    password,
    password2,
    companyPhone,
    employeeTotal,
    state,
  }) {
    this.companyName = companyName;
    this.companyEmail = companyEmail;
    this.password = password;
    this.password2 = password2;
    this.companyPhone = companyPhone;
    this.employeeTotal = employeeTotal;
    this.state = state;
  }

  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  isValidMail = () => {
    return this.validateEmail(this.companyEmail);
  };
  isValidField = () => {
    if (
      !this.companyEmail.trim() ||
      !this.companyPhone.trim() ||
      !this.companyName ||
      !this.password ||
      !this.password2 ||
      !this.employeeTotal ||
      !this.state
    ) {
      return false;
    } else {
      return true;
    }
  };
  isMatch = () => {
    if (this.password === this.password2) {
      return true;
    } else {
      return false;
    }
  };
  isLengthy = () => {
    if (this.password.length > 8) {
      return true;
    } else {
      return false;
    }
  };
}

export default Validations;
