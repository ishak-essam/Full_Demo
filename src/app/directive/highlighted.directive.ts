import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'highlight',
})
export class HighlightedDirective {
  constructor(private ele: ElementRef) {}
  @Input('highlighted') isHighlighted: boolean = false;
  @Output() toggleHiglight = new EventEmitter();
  // @HostBinding('className')
  // get cssName() {
  //   return 'Highlighted';
  // }
  @HostBinding('class.highlighted')
  get cssName() {
    return this.isHighlighted;
  }
  @HostListener('mouseover') mouseOver() {
    this.isHighlighted = true;
    this.toggleHiglight.emit(this.isHighlighted);
  }
  @HostListener('mouseleave') mouseleave() {
    this.isHighlighted = false;
    this.toggleHiglight.emit(this.isHighlighted);
  }
  toggle() {
    this.isHighlighted = !this.isHighlighted;
    console.log(this.isHighlighted);
    this.toggleHiglight.emit(this.isHighlighted);
  }
}
