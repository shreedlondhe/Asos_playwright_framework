import {test} from '@playwright/test';
import login_page from '../pages/login_page';
import search from '../pages/search_page'
import men from '../pages/men_page';
import Logger from '../test_utils/logger';

let Login_Object:any
let search_object:any
let men_Object:any

test.beforeEach(async ({page})=>{
    Logger.log("creating objects for the test cases")
    Login_Object=new login_page(page);
    search_object=new search(page);
    men_Object=new men(page);
    Logger.log("objects created successfully")
})


test.afterEach("closing the browser",()=>{
Logger.log("test case completed")
})

test("login test",async({page})=>{
 
   await Login_Object.login();
   await search_object.searching("ring");
   Logger.log("Searcing for ruing test case completed")
   
   Logger.log("Login case completed")

   
})

test("serching for shoes",async({page})=>{
    await Login_Object.login();
    await search_object.searching("shoes");
    Logger.log("serching for shoes case completed and verified")
    
})

test("Verify Men section",async({page})=>{
     await Login_Object.login();
    await men_Object.gotoMenSectiion()
    Logger.log("Completed men section test case")


})

