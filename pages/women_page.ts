
import utils from '../test_utils/utils'



export default class women{

    page:any;
    womenSection:any;
    constructor(page:any){
        this.page=page
        this.womenSection=this.page.locator("//a[.='WOMEN']")
    }

    async gotoWomenSection(){

     
    await utils.click(this.womenSection,'Clicking on women section')
    
            }

}