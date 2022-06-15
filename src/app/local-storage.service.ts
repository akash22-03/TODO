import { Injectable } from '@angular/core';
import { Todo } from './Todo';
declare var db : any;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public storagename = "todo_notes";
  constructor() { }
  add(todo : Todo){
    return new Promise(async (resolve,reject)=>{
      if(db!=undefined){
        const request = await db.transaction([this.storagename],"readwrite").objectStore(this.storagename).put(todo);
        request.onsuccess = await function(event:any){
          if(event.target.result){
            console.log("Success");
            resolve("success");
          }else{
            console.log("Error");
            resolve(false);
          }
        }
      }
    });
  }
  get(keyname:any){
    return new Promise(async (resolve,reject)=>{
      if(db!=undefined){
        const request = await db.transaction([this.storagename],"readwrite").objectStore(this.storagename).get(keyname);
        request.onsuccess = await function(event:any){
          if(event.target.result){
            console.log("Success");
            resolve(event.target.result);
          }else{
            console.log("Error");
            resolve(false);
          }
        }
      }
    });
  }
  delete(keyname:any){
    return new Promise(async (resolve,reject)=>{
      if(db!=undefined){
        const request = await db.transaction([this.storagename],"readwrite").objectStore(this.storagename).delete(keyname);
        request.onsuccess = await function(event:any){
          if(event.target.result){
            resolve("success");
          }else{
            resolve(false);
          }
        }
      }
    });
  }
  viewData(){
    var arr : Todo[] = []
    var objectStore = db.transaction([this.storagename]).objectStore(this.storagename);
    objectStore.openCursor().onsuccess = function(event:any){
      var cursor = event.target.result;
      if (cursor) {
        arr.push(cursor.value);
        cursor.continue();
      }
      else {
        console.log("No more entries!"+arr);
      }
    };
    return arr;
  }
  viewMyTodos(arr : Todo[]){
    var newarr : Todo[] = arr.filter(todo => todo.active===true);
    console.log(newarr)
    return newarr;
  }
  viewCompData(){
    var arr : Todo[] = []
    var objectStore = db.transaction([this.storagename]).objectStore(this.storagename);
    objectStore.openCursor().onsuccess = function(event:any){
      var cursor = event.target.result;
      if (cursor) {
        arr.push(cursor.value);
        cursor.continue();
      }
      else {
        console.log("No more entries!");
      }
    };
    var newarr : Todo[] = arr.filter(el => el.active==false);
    return newarr;
  }

}
