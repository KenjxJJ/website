import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-like',
  template: `
  <div class="likeWidgetContainer pointable" (click)="onClick()">
    <div class="likeWidget">
        <div class="likeButton">
        <i class="fa fa-heart fa-3x" [style.color]='iconColor'></i>
       </div>
    <div class="badge badge-inverse likeCount">
        <div *ngIf='iconColor=="white"'>Click to add to
        <br/>Favorites</div>
        <div  *ngIf='iconColor=="red"'>Click to remove <br/> From Favourites</div>
      </div>
    </div>
    </div>`,
    styleUrls: ['./like-movie.component.css']
})

export class LikeMovieComponent {

   @Input() set liked(val) {
         this.iconColor = val ? 'red' : 'white';
   }
   @Output() like = new EventEmitter();
   iconColor: string;

   onClick(): void {
        this.like.emit({});
    }
  }
