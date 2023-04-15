import {User} from "./user";

export class Pet {
  public id: string = '';
  public name: string = '';
  public kind: string = '';
  public age: number = 0.0;
  public owner: User = new User();
}
