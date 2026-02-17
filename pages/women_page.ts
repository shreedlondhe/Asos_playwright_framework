




export default class women{

    page:any;
    womenSection:any;
    constructor(page:any){
        this.page=page
        this.womenSection=this.page.locator("//a[.='WOMEN']")
    }

    async gotoWomenSection(){
        await this.womenSection.click();
    
            }

}