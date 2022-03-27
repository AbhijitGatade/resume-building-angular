import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  data:any;

  constructor(private api:ApiService, private cookie:CookieService, private router:Router) {

   }

  ngOnInit(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.data = new FormGroup({
      username:new FormControl("", Validators.compose([Validators.required])),
      password:new FormControl("", Validators.compose([Validators.required]))
    });
  }

  submit(data:any)
  {
    let mydata = {data : data};
    this.api.post("admin/login", mydata).subscribe((result:any)=>{
      if(result.data.status == "success")
      {
        this.cookie.set("usertype", "admin");
        this.cookie.set("name", "Administrator");
        this.cookie.set("userid", "0");
        this.router.navigate(["./admin/dashboard"]).then(()=>{
          window.location.reload();
        });
      }
      else{
        alert("Invalid credentials.");
      }
    });
  }

}
