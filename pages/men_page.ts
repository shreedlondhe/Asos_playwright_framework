
import { Locator } from "@playwright/test"; 

export default class men{

page:any;
menSection:Locator;
constructor(page:any){
this.page=page
this.menSection=this.page.locator("//a[.='MEN']").first();

}

async gotoMenSectiion(){
await this.menSection.click();
}

}