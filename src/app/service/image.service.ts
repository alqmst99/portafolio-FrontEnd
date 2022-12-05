import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
url: string='';
  constructor(private storage: Storage) { }

 public uploadImg($event:any, name: string){
  const file =$event.target.files[0]
  const imgRef= ref(this.storage, `image/` + name)
  uploadBytes(imgRef, file).then(Response =>{this.getImage()} ).catch(error => console.log(error))
  console.log(file);

}
public uploadImgP($event:any, name: string){
  const file =$event.target.files[0]
  const imgRef= ref(this.storage, `project/` + name)
  uploadBytes(imgRef, file).then(Response =>{this.getImageP()} ).catch(error => console.log(error))
  console.log(file);

}
getImage(){
const imgRef = ref(this.storage, 'image')
list(imgRef).then(async Response =>{ for(let item of Response.items){
  this.url = await getDownloadURL(item);
  console.log("la URL es : " + this.url);
}} ).catch(error => console.log(error))
}
getImageP(){
  const imgRef = ref(this.storage, 'project')
  list(imgRef).then(async Response =>{ for(let item of Response.items){
    this.url = await getDownloadURL(item);
    console.log("la URL es : " + this.url);
  }} ).catch(error => console.log(error))
  }
}
