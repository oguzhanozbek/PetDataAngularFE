import {Pet} from "./pet";
import {User} from "./user";

export interface UserJson {
  id: string;
  firstname: string;
  lastname: string;
  pets: Pet[];
}

export interface PetJson {
  id: string;
  name: string;
  kind: string;
  age: number;
  owner: User;
}
