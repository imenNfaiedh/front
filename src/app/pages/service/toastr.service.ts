import { Injectable } from '@angular/core';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastrService: NbToastrService) { }


  
  config: NbToastrConfig;

  index = 1;
  destroyByClick = true;
  duration = 3000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';
   //  'primary',
  //     'success',
  //     'info',
  //     'warning',
  //     'danger',
  title = 'HI there!';
  content = `I'm cool toaster!`;
  makeToast() {
    this.showToast(this.status, this.title, this.content);
  }

    showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    
    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }
}
