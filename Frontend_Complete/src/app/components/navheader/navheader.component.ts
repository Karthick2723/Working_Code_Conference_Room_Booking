import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent {
  
  constructor(private api: ApiService, private auth: AuthService) { }


  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }
}
