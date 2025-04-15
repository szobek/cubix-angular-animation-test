import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { UserDetail } from '../models/userDetail.model';
import { NameFormatPipe } from '../name-format.pipe';

@Component({
  selector: 'app-user-detail',
  imports: [NameFormatPipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
  animations: [
    trigger('hideDetails', [
      transition(':enter', [
        style({ opacity: 0,backgroundColor:'rgb(158, 158, 158)',color:'wheat'  }),
        animate('2300ms', style({ opacity: 1}))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0, }))
      ])
    ]),
  ],
})
export class UserDetailComponent {
userDetail?:UserDetail|null;
@Output() changeShowDetails:EventEmitter<void> = new EventEmitter();
@Input() set UserDetail(userDetail:UserDetail|null){
  this.userDetail = userDetail;
  }


closeDetails(){
  this.userDetail = undefined;
  this.changeShowDetails.emit();
}
}
