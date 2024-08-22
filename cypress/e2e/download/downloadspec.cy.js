describe('downloads', () => {

  it('Users should be able to download texts', () => {
    cy.fixture('selectors').then((data)=>{
      cy.clickAnyElement(data.fileDownload)
      cy.typeAnyTextAnywhere(data.textField, 'Consistency is the key to success')
      cy.clickAnyElement(data.generateFile)
      cy.clickAnyElement(data.downloadButton)


    })
   
  })

  })