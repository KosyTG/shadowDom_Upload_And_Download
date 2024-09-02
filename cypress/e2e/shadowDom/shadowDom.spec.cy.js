describe('Using shadowDom',()=>{
    it('User filling the form in the shadowDom',()=>{
        cy.fixture('selectors').then((data)=>{
            cy.clickAnyElement(data.shadowDOM)
            cy.get(data.shadowSignUpForm).shadow().find(data.shadowUsername).should('exist').type('KosiTG')
            cy.get(data.shadowSignUpForm).shadow().find(data.shadowEmailAddress).should('exist').type('kosiTG22@gmail.com')
            cy.get(data.shadowSignUpForm).shadow().find(data.shadowPassword).should('exist').type('Tester@22')
            cy.get(data.shadowSignUpForm).shadow().find(data.shadowConfirmPassword).should('exist').type('Tester@22')
            cy.get(data.shadowSignUpForm).shadow().find(data.submitButton).should('be.visible').and('exist').click()
        })
    })
})