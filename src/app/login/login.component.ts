import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users/userList';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }
  result!:boolean;
  userList=new Users().userList;
  selectedUser:any;
  message!:string;
  ngOnInit(): void {
    this.login()
    this.signUp();
  }

  login(){
    let name:string;
    this.router.paramMap.subscribe(param=>{
      name=param.get('name')!;
      console.log(name)
      if(name==='login'){
        this.result=true
      }else{
        this.result=true
      }
      
    })
  }

  signUp(){
    
    this.router.paramMap.subscribe(param=>{
      if(param.get('name')==='sign_up'){
        this.result=false
      }else{
        this.result=true
      }
    })
  }

  getSistem(username:string,password:string){
    this.selectedUser=this.userList.find(i=>
      i.username===username && i.password===password
    )
    console.log(this.selectedUser)
    if(this.selectedUser){
      
      this.route.navigate(['/home'])
    }else{
      this.message='yanlış kullanıcı adı ya da parola'

    }
  }

  getClasses(statu:any){
    
    return {
      'fas fa-eye':statu.type==='password',
      'far fa-eye-slash':statu.type==='text'
    }
  }

  clicked(statu:any,){
    if(statu.type==='text'){
      statu.type='password'
    }else {
      statu.type='text'
    }
    
  }

}
