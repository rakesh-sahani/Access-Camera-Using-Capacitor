import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
 
  title = 'Rat6';
  imageElement : any;
  constructor(){}
  async takePicture() {
    
  const { Camera } = Plugins;
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    correctOrientation:true,
    resultType: CameraResultType.Uri,
    //source: CameraSource.Camera
  });
  // image.webPath will contain a path that can be set as an image src. You can access
  // the original file using image.path, which can be passed to the Filesystem API to
  // read the raw data of the image, if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  
  // can be set to the src of an image now
  //this.imageUrl.src =  image.webPath;

  var imageUrl = image.webPath;
  // can be set to the src of an image now
  this.imageElement = imageUrl;
  console.log(imageUrl);
  console.log(this.imageElement.src);

  alert(imageUrl);
  alert(this.imageElement.src);
  
}
}






