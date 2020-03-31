import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {

  public accordionState = false;
  @Input() public elements: Array<string> = [
    'Listado por defecto',
    'Listado por defecto 2',
    'Listado por defecto 3',
    'Listado por defecto 4',
    'Listado por defecto 5',
  ];
  @Input() public nameBtn = 'by Default';
  @Input() public multiple = false;
  @Output() selection: EventEmitter<any> = new EventEmitter();
  public elementBrands: object = {};

  constructor() {
  }

  isOpenAccordion(status) {
    this.accordionState = !status;
    return !status;
  }

  selectedElement(event) {
    this.nameBtn = event.target.innerText;
    this.isOpenAccordion(this.accordionState);
    this.selection.emit(this.nameBtn);
  }

  onSubmit(formData: NgForm) {
    this.isOpenAccordion(this.accordionState);
    this.selection.emit(formData.value);
  }
}
