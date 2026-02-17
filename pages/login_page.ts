
import {Page} from '@playwright/test';

export default class login_page{

page:Page;
url:string;

constructor(page:Page){

this.page=page;
this.url="https://www.asos.com/"

}

 
async login(){
await this.page.goto(this.url);
console.log('navigating to this site')

  
}

}

