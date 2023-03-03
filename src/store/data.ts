import { makeAutoObservable, runInAction } from "mobx";
import { initHttp } from "../http";
import { User } from "../types/users";
interface RegresData {
  data: User[] | undefined;
}

class DataStore {
  users: RegresData = {
    data: [],
  };
  constructor(private http = initHttp()) {
    makeAutoObservable(this);
  }

  get dataFromRegres() {
    return this.users.data;
  }

  getDataFromApi = async () => {
    const { data, error } = await this.http.get<User[]>(`/users`);
    console.log(data, "data iz stora");
    runInAction(() => {
      if (data) {
        this.users.data = data;
        console.log(this.users.data, "iz stora");
      } else console.log(error, "error iz stora");
    });

    console.log(error, "error iz stora");
  };
}
export default new DataStore();
