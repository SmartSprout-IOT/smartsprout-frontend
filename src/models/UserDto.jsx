export default class UserModel {
  constructor(
    userFirstName,
    userLastName,
    userEmail,
    userPhone,
    userBirthDate,
    imageData
  ) {
    this.userFirstName = userFirstName;
    this.userLastName = userLastName;
    this.userEmail = userEmail;
    this.userPhone = userPhone;
    this.userBirthDate = userBirthDate;
    this.imageData = imageData;
  }

  static fromJson(json) {
    return new UserModel(
      json.userFirstName,
      json.userLastName,
      json.userEmail,
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
      userPhone: this.userPhone,
      userBirthDate: this.userBirthDate,
      imageData: this.imageData,
    };
  }
}
