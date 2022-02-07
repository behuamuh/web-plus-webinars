import { makeObservable, observable, action, runInAction } from 'mobx';

class User {
  name = '';

  constructor() {
    makeObservable(this, {
      name: observable,
      setName: action,
    });
  }

  setName = name => {
    this.name = name;
  }
}

const user = new User();

export default user;
// https://cataas.com/api/cats?skip=0&limit=30
