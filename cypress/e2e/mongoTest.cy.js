describe('Book store database testing', () => {
    it('Find and Insert Query', () => {
        cy.findOne({authorUsername:"Ranjan Dhakal"}).then((result) => {
          
          expect(result).to.not.be.null;
          
        });
        cy.insertOne({authorUsername:"Ranjan Dhakals",authorEmail:"rranjandhakals@gmail.com",authorPhone:"9876543210"}).then((result) => {
           
            expect(result).to.not.be.null;
            
          });
    });
});