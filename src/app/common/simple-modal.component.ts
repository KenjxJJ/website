import {  Component, Input, Inject, ElementRef, ViewChild } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Component({
     selector: 'simple-modal',
     template: `
        <div id='{{elementId}}' #modalcontainer  class='modal fade' tabindex='-1'>
           <div class='modal-dialog'>
            <div class='modal-content'>
             <div class='modal-header'>
               <button type='button' class='close'
                   data-dismiss='modal'>
                   <h4 class='modal-title'>{{title}}</h4>
                   <span>&times;</span></button>
                   </div>
                   <div class='modal-body' (click)='closeModal'>
                     <ng-content></ng-content>
                     </div>
                    </div>
                  </div>
                </div> `,
    styles: [
         `.modal-body { height: 250px; overflow-y: scroll; }
         .modal-title{ float:left; margin-right: 150px;}`
    ]
})

export class SimpleModalComponent {
   @Input() title: string;
   @Input()  elementId: string;
   @Input() closeOnBodyClick: string;
   @ViewChild ('modalcontainer', {static: false}) containerEl: ElementRef;


   constructor( @Inject(JQ_TOKEN)  private $: any ) {

  }
  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
  }
 }

}
