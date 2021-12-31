import { AfterViewInit, Component,
         ElementRef, ViewChild,    } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [
    './modal.component.scss',
  ],
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modal')
  private modalRef!: ElementRef<HTMLDivElement>;
  private modal: any;

  public ngAfterViewInit(): void {
    this.modal = new bootstrap.Modal(this.modalRef.nativeElement);
  }

  public onOkClicked(): void {
    this.modal.hide();
  }

  public onCloseClicked(): void {
    this.modal.hide();
  }
}
