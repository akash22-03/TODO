import { Injectable } from '@angular/core';
import { Todo } from './Todo';
declare var db: any;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public storagename = "todo_notes";
  constructor() { }

  add(todo: Todo) {
    const request = db.transaction([this.storagename], "readwrite").objectStore(this.storagename).put(todo);
    request.onsuccess = function (event: any) {
      if (event.target.result) {
        console.log("Success");
      } else {
        console.log("Error");
      }
    }
  }
  update(todo:Todo){
    const request = db.transaction([this.storagename], "readwrite").objectStore(this.storagename).get(todo.title);
    request.onsuccess = function (event: any) {
      var data = event.target.result;
      data.active = false;
      db.transaction([this.storagename], "readwrite").objectStore(this.storagename).put(todo);
    }
  }
  delete(keyname: any) {
    const request = db.transaction([this.storagename], "readwrite").objectStore(this.storagename).delete(keyname);
    request.onsuccess = function (event: any) {
      if (event.target.result) {
        console.log("Success");
      } else {
        console.log("Error");
      }
    }
  }
  viewData(arr : Todo[]) {
    return new Promise(async (resolve, reject)=>{
      if(db!=undefined){
        var request = await db.transaction([this.storagename]).objectStore(this.storagename).openCursor();
        request.onsuccess = await function (event: any) {
          var cursor = event.target.result;
          if (cursor) {
            arr.push(cursor.value);
            cursor.continue();
          }
          else {
            resolve("success")
          }
        };
      }
    })
  }
  viewCompData(arr : Todo[]) {
    return new Promise(async (resolve, reject)=>{
      if(db!=undefined){
        var request = await db.transaction([this.storagename]).objectStore(this.storagename).openCursor();
        request.onsuccess = await function (event: any) {
          var cursor = event.target.result;
          if (cursor) {
            arr.push(cursor.value);
            cursor.continue();
          }
          else {
            resolve("success")
          }
        };
      }
    })
  }
  

}
