describe('Using cypress plugin', ()=>{
    it('Using attachFile to upload pdf', ()=>{
        cy.fixture('selectors').then((data)=>{
            cy.clickAnyElement(data.uploadFile)
            cy.clickAnyElement(data.chooseFile).attachFile('Manchester.pdf')
            
        })
    })
})