/// <reference types="Cypress"/>

//This is must sicne we are going to refer a seperate page. (it is ok put or not put the file extention .js)
import Login from "../PageObjects/LoginPage.js";


describe('SuitName_Page_Object_Model2', () => 

{

    //Using POM with fixtures    (cypress > Fixtures folder)
    //Page object model we are refering the elements, from the fixtures we are refering the data
    it('test2', () => 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
  
      cy.fixture('orangehrm.json').then((data) => 
      {
        const ln=new Login();                   //Function in the LoginPage.js based on the import header
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin();
      })
  
    })

//End of describe 2

}
)