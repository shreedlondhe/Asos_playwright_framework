import { Locator } from "@playwright/test";
import utils from '../test_utils/utils'



 export default class search{
     page:any; 
     searchBox:Locator;

constructor(page:any){
this.page=page;
this.searchBox=this.page.locator("//input[@id='chrome-search']")
}


async searching(things:string){   // things == ring
await utils.fill(this.searchBox,things,`Searching for ${things}`)
await this.page.keyboard.press('Enter');

}



}