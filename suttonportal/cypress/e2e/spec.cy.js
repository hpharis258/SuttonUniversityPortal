describe('Authenticator:', function() {
  // Step 1: setup the application state
  beforeEach(function() {
    cy.visit('https://github.com/hpharis258/SuttonUniversityPortal/tree/main');
  });
  
  describe('Sign In:', () => {
    it('allows a user to sign in and sign out', () => {
      // Step 2: Take an action (Sign in)
      cy.get('input:first').type("hpharis258@gmail.com");
      cy.get('input:last').type("wWzxdzJLn5S4F@j");
      cy.get(selectors.signInButton).contains('Sign in').click();

      cy.wait(3000);

      // Step 3: Make an assertion (Check for sign-out text)
        cy.get(selectors.signOutButton).contains('Sign out');
    });
  });

});
export const selectors = {
  // Auth component classes
  usernameInput: '[data-amplify-usernamealias="true"]',
  signInPasswordInput: '[data-amplify-password="true"]',
  signInButton: '[data-variation="primary"]',
  signOutButton: 'button'
}