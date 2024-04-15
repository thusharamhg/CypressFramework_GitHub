
class Login 

{

txtUserName="input[placeholder='Username']";
txtPassword="input[placeholder='Password']";
btnSubmit="button[type='submit']";
lblmsg=".oxd-topbar-header-breadcrumb > .oxd-text";


setUserName(username) 
{
    cy.get(this.txtUserName).type(username);    //cy.get(this.txtUserName).type("Admin");  
}


setPassword(password) 
{
    cy.get(this.txtPassword).type(password);    // cy.get(this.txtPassword).type("admin123");
}


clickSubmit() 
{
    cy.get(this.btnSubmit).click();
}


verifyLogin()
{
    cy.get(this.lblmsg).should('have.text',"Dashboard");
}


}


//This is must sicne we are going to call this in other pages
export default Login;