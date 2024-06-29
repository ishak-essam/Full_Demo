import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective {
  @Input() DefulatColor: string = '#fff';
  @Input() HighlightColor: string = '#003';
  @HostBinding('style.backgroundColor') BgC: string;
  @HostBinding('style.color') Color: string;
  constructor(private element: ElementRef, private render2: Renderer2) {
    this.element.nativeElement.style.color = '#000';
    render2.setStyle(
      this.element.nativeElement,
      'background-color',
      'lightwhite'
    );
  }
  @HostListener('mouseenter') mouseover(eventdata: Event) {
    // this.render2.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   '#ddd'
    // );
    // this.BgC = '#003';
    this.Color = '#fff';
    this.BgC = this.HighlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventdata: Event) {
    this.BgC = this.DefulatColor;
    // this.BgC = '#fff';
    this.Color = '#003';
    // this.render2.setStyle(this.element.nativeElement, 'background-color', '');
  }
}
