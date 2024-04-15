/// <reference types="Cypress"/>

//This is must sicne we are going to refer a seperate page. (it is ok put or not put the file extention .js)
import Login from "../PageObjects/LoginPage.js";


describe('SuitName_Page_Object_Model', () => 

{

    //Using POM with fixtures    (cypress > Fixtures folder)
    //Page object model we are refering the elements, from the fixtures we are refering the data
    it('test1', () => 
    {
      //Thush - Try to capture the vedio on fail, but not work
      //cy.captureVideoOnFail();

      cy.visit("https://opensource-demo.orangehrmlive.com/")
  
      cy.fixture('orangehrm.json').then((data) => 
      {
        const ln=new Login();                   //Function in the LoginPage.js based on the import header

        ln.setUserName(data.username)
        cy.log('Setting username...');

        ln.setPassword(data.password)
        cy.log('Setting password...');

        ln.clickSubmit();
        cy.log('Clicking submit button...');

        ln.verifyLogin();
        cy.log('Verifying login...');
      })
  
    })

}
)


