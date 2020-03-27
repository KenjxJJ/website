import { Input, Output, Component, EventEmitter } from '@angular/core';
//This like-movie.component.ts file is a small favourite widget for selecting a particular movie on interest.

@Component({
  selector: 'movie-like',
  template: `
  <div class="likeWidgetContainer pointable" (click)="onClick()">
   <!-- Create a heart like widget that turns red on selecting 
    a particular movie as a favourite -->
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
  //input liked directive from the parent (movie-thumbnail.component.ts) and 
  //set on colot values red or white
   @Input() set liked(val) {
         this.iconColor = val ? 'red' : 'white';
   }
  //Emitted event like that is bind in the movie-thumbnail.component.ts
   @Output() like = new EventEmitter();
   iconColor: string;

  //function invoke onClick to shows effects of turning red or white based on selection by mouse click
  //outputs an empty object
   onClick(): void {
        this.like.emit({});
    }
  }
