import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {User} from "./user";
import {UserJson, PetJson, CatalogJson} from "./json-structure";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  private jsonDataUri = 'http://localhost:8080/api/users';

  private static json2User(userJson: UserJson): User {
    const user = new User();
    user.id = userJson.id;
    user.firstname = userJson.firstname;
    user.lastname = userJson.lastname;
    user.pets = userJson.pets;
    return user;
  }

  public getUserList(): Observable<User[]> {
    const users: User[] = [];
    const subject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(users);
    this.httpClient
      .get(this.jsonDataUri)
      .subscribe(
        (dataJson: any) => {
          const catalogJson: CatalogJson = dataJson._embedded;
          const items: UserJson[] = catalogJson.users;
          console.log(items);
          items.forEach(
            (userJson: UserJson) => users.push(UserDataService.json2User(userJson)));
          subject.next(users);
        })
    return subject;
  }

  public getUser(id: String): Observable<User> {
    let subject: ReplaySubject<User> = new ReplaySubject<User>();
    this.httpClient
      .get(this.jsonDataUri + '/' + id)
      .subscribe(
        (userJson: any) => {
          console.log(userJson);
          subject.next(UserDataService.json2User(userJson));
        })
    return subject;
  }

}
