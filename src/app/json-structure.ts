import {Pet} from "./pet";
import {User} from "./user";

export interface UserJson {
  id: string;
  firstName: string;
  lastName: string;
  pets: Pet[];
}

export interface PetJson {
  id: string;
  name: string;
  kind: string;
  age: number;
  owner: User;
}

export interface CatalogJson {
  users: UserJson[];
  pets: PetJson[];
}
