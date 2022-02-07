import { makeObservable, observable, action, computed, runInAction, autorun } from 'mobx';

const catsUrl = 'https://cataas.com/api/cats?skip=0&limit=30';

class Cats {
  data = [];
  loading = false;

  constructor() {
    makeObservable(this, {
      data: observable,
      loading: observable,
      setLoading: action,
      addCat: action,
      deleteCat: action,
      catsCount: computed,
      fetchCats: action,
    });

    runInAction(this.fetchCats);

  }

  get catsCount() {
    return this.data.length;
  }

  setLoading = newLoading => {
    this.loading = newLoading;
  }

  addCat = id => {
    this.data.push({
      id,
      created_at: new Date().toISOString(),
    })
  }

  deleteCat = id => {
    const index = this.data.findIndex(cat => cat.id === id);
    this.data.splice(index, 1);
  }

  fetchCats = async () => {
    this.setLoading(true);
    const res = await fetch(catsUrl);
    const data = await res.json();

    this.setLoading(false);
    this.data = data;
  }
}

const cats = new Cats();

autorun(() => {
  console.log(cats.data);
})

export default cats;
// https://cataas.com/api/cats?skip=0&limit=30
