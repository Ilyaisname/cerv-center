import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe',
  standalone: true
})
export class SafePipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(fileUrl: string, type?: string) {

    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(fileUrl);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(fileUrl);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(fileUrl);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(fileUrl);
      case 'resource':
      default:
        return this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);
    }
  }

}
