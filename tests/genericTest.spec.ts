import {test,Page} from '@playwright/test';
import login_page from '../pages/login_page';
import search from '../pages/search_page'
import men from '../pages/men_page';
import Logger from '../test_utils/logger';
import women from '../pages/women_page';

let Login_Object:any
let search_object:any
let men_Object:any
let women_Object:any;
let page:Page;
export {page};

test.beforeEach(async ({page})=>{
    page=page;
    Logger.log("creating objects for the test cases")
    Login_Object=new login_page(page);
    search_object=new search(page);
    men_Object=new men(page);
    women_Object=new women(page)
    Logger.log("objects created successfully")
})


test.afterEach("closing the browser",()=>{
Logger.log("test case completed")
})

test("login test",async({})=>{
 
   await Login_Object.login();

//    await this.page.goto(this.url);
// console.log('navigating to this site')
   await search_object.searching("ring");
   Logger.log("Searcing for ruing test case completed")
   
   Logger.log("Login case is completed")
   Logger.log("addeed one more log statement")


   
})

test("serching for shoes",async({page})=>{
    await Login_Object.login();
    await search_object.searching("ring");
 
    
})

test("Verify Men section",async({page})=>{
     await Login_Object.login();
    await men_Object.gotoMenSectiion()
    Logger.log("Completed men section test case")


})

test("verify women section",async ()=>{
await Login_Object.login();
await women_Object.gotoWomenSection();

})

test("code commit",async ()=>{


})
