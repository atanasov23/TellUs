export class InputValidationService {

  constructor() { }

  dataVerification(data: any) {

    if (data.username.length < 5) {
      return 'Потребителското име е твърде кратко!( Минимум 5 символа )';
    } else if (data.password.length < 5) {
      return 'Паролата е твърде кратка!( Минимум 5 символа )';
    } else if (data.repeatPassword !== data.password) {
      return 'Паролите не съвпадат!';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      return 'Невалиден имейл!';
    } else {
      return 'true';
    }
  }
}
