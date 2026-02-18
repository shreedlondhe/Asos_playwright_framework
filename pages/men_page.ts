
import { Locator } from "@playwright/test"; 
import utils from '../test_utils/utils';
import Logger from "../test_utils/logger";

export default class men{

page:any;
menSection:Locator;
constructor(page:any){
this.page=page
this.menSection=this.page.locator("//a[.='MEN']").first();

}

async gotoMenSectiion(){
await utils.click(this.menSection,'Navigating to main section')
await this.menSection.click();
//Logger.log("cliocking on men section")

}


async gotoChildSection(){

    await utils.click(this.menSection,'Navigating to main section')

    await this.menSection.click();
   // Logger.log("clicking on child section")
}


async gotoHomePage(){
    await utils.click(this.menSection,'Navigating to main section')

    await this.menSection.click();
   // Logger.log('cliclinng on home page')
}


}