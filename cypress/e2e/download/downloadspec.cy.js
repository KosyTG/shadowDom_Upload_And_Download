describe('downloads', () => {

  it('Users should be able to download texts', () => {
    cy.fixture('selectors').then((data)=>{
      cy.visit('/')
      cy.contains('File Download').should('exist').and('be.visible').click()
      cy.get(data.textField).should('be.visible').type('Consistency is key')
      cy.get(data.generateFile).should('be.visible').click()
      cy.get(data.downloadButton).should('be.visible').click()


    })
   
  })

  })