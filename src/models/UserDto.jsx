export default class UserModel {
  constructor(
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userPhone,
    userBirthDate,
    imageData
  ) {
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userEmail = userEmail;
    this.userPassword = userPassword;
    this.userPhone = userPhone;
    this.imageData = imageData;
    this.userBirthDate = userBirthDate;
  }
  static fromJson(json) {
    return new UserModel(
      json.userFirstName,
      json.userLastName,
      json.userEmail,
      json.userPassword,
      json.userPhone,
      json.userBirthDate,
      json.imageData
    );
  }

  toJson() {
    return {
      userFirstName: this.userFirstName,
      userLastName: this.userLastName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      userPhone: this.userPhone,
      userBirthDate: this.userBirthDate,
      imageData: this.imageData,
    };
  }
}
