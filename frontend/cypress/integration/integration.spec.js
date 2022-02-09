describe('Integration test', () => {
    it('Test connection with backend', () => {
      cy.request('http://localhost:3003')
       .should((response) => {
        expect(response.status).to.eq(200)
     })
    })
  });