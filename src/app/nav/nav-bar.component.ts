import { Component } from "@angular/core";

@Component({
      selector: 'nav-bar',
      templateUrl: './nav-bar.component.html',
      styles: [`
          .navbar-nav{
            flex-direction : unset;
                     }

             .navbar-nav li {
                margin-right : 10px;
              color : green;
            }
            button {
               color :white;
               background-color: orange;
               height: 20%;
            }
            : hover {
               color : blue;
            }
      `]})

export class NavBarComponent {

}
