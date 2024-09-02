context('Using native cypress comman',()=>{
    it('Using select file to upload pdf ',()=>{
        cy.fixture('selectors').then((data)=>{
            cy.clickAnyElement(data.uploadFile)
            cy.clickAnyElement(data.chooseFile).selectFile('cypress/fixtures/Int-Passport.pdf')

        })
    })

    it('Using select file to upload jpg ',()=>{
        cy.fixture('selectors').then((data)=>{
            cy.clickAnyElement(data.uploadFile)
            cy.clickAnyElement(data.chooseFile).selectFile('cypress/fixtures/Iphone.jpeg')

        })

    })

    it('Using select file to upload png ',()=>{
        cy.fixture('selectors').then((data)=>{
            cy.clickAnyElement(data.uploadFile)
            cy.clickAnyElement(data.chooseFile).selectFile('cypress/fixtures/passport.jpg')

        })

    })

    it('Using select file to upload jpeg ',()=>{
        cy.fixture('selectors').then((data)=>{
            cy.clickAnyElement(data.uploadFile)
            cy.clickAnyElement(data.chooseFile).selectFile('cypress/fixtures/Wifi.png')

        })

    })

})

