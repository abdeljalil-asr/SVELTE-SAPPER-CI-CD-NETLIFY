describe('loading site', () => {
    it('visite de site', () => {
      cy.visit("/");
 
      cy.get('main h1').should('have.class', 'svelte-1kk9opm')

    })

    

    it('seek word', () => {
        cy.visit("/");

  
        cy.get('main h1').contains("Great success!")
     
      })
  })
