import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageShareService {
  private images: string[] = [];
constructor() { }
setImages(images: string[]) {
  this.images = images;
}

getImages(): string[] {
  return this.images;
}
resetImages(): void {
  this.images = [];
}
}
