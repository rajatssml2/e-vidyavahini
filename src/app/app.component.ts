import { Component,OnInit } from '@angular/core';
import { UserService } from './_services/user.service';
import {delay, first} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'e-vidyavahini';
  loading:any = false;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.userService.loadingSub
    .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
    .subscribe((loaded:any) => {
      this.loading = loaded;
    });
  }
}
