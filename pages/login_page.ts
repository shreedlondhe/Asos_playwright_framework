
import {Page} from '@playwright/test';
import {data} from '../test_utils/data'

export default class login_page{

page:Page;


constructor(page:Page){

this.page=page;



}

 
async login(){
await this.page.goto(process.env.URL!);
console.log('navigating to this site')

  
}

}

