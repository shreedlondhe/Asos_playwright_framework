
import {page} from '../tests/genericTest.spec';
import Logger from '../test_utils/logger';
import {Locator} from 'playwright/test';

class utils{

static async click(element:Locator,msg:string){

    await element.click();
    Logger.log(msg)
}


static async fill(element:Locator,value:string,msg:string){
    await element.fill(value);
Logger.log(msg)
}



}
export default utils;