describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') //to open/visit our application
    cy.contains('Sign Up') // to check page contains "sign up" text
    cy.get('input[name="fullname"]').type("abc") //to checther able to type
    cy.get('input[name="email"]').type("abc@gmail.com");
    cy.get('input[name="password"]').type("abc@gmail.com");
  })
})