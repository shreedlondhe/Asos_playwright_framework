import { Locator } from "@playwright/test";




 export default class search{
     page:any; 
     searchBox:Locator;

constructor(page:any){
this.page=page;
this.searchBox=this.page.locator("//input[@id='chrome-search']")
}


async searching(things:string){
await this.searchBox.fill(things);
await this.page.keyboard.press('Enter');

}



}