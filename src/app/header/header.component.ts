import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isuserloggedin:boolean = false;
  name:string = "";

  constructor(private cookie:CookieService, private router:Router) { }

  ngOnInit(): void {
    if(this.cookie.get("usertype") == "")
      this.isuserloggedin = false;
    else{
      this.isuserloggedin = true;
      this.name = this.cookie.get("name");
    }
  }

  signout()
  {
      this.cookie.delete("usertype");
      this.cookie.delete("userid");
      this.cookie.delete("name");
      this.router.navigate(["./"]).then(()=>{
        window.location.reload();
      });
  }

}
