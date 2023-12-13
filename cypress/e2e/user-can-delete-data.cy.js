describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8000/')

    //reset database
    cy.exec(
      "cd ../demo-app-cypress-automation &&  php artisan migrate:fresh --seed"
    )

    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://localhost:8000/user-management/user');
  });
  
  //positif test case
  it('User can delete data', () => {
    //cy.get('.table td').contains('user').next().next().next().contains('Delete').click();
    cy.get('.table td').contains('user').parent().find('button').contains('Delete').click();

    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
    .should('be.visible')
    .and('have.class','alert-success')

    //.and('have.text','User Deleted Successfully')
    .contains('User Deleted Successfully');
    cy.get('.table').should('not.contain', 'user');

  })

  //positif test case
  it('User can cancel delete data', () => {
    cy.get('.table td').contains('user').parent().find('button').contains('Delete').click();

    cy.get('.swal-button-container').find('button').contains('Cancel').click();
    cy.get('.table td').contains('user').should('be.visible');

  })

  //negatif test case
  it('dummy test', () => {
   
  });   

  it.only('User can delete data', () => {
    //cy.get('.table td').contains('user').next().next().next().contains('Delete').click();
    cy.get('.table td').contains('user baru').parent().find('button').contains('Delete').click();

    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
    .should('be.visible')
    .and('have.class','alert-success')

    //.and('have.text','User Deleted Successfully')
    .contains('User Deleted Successfully');
    cy.get('.table').should('not.contain', 'user baru');

  })
  
  it.only('user can delete data (Anothor Admin)', () => {
  cy.get('.table td').contains('Anothor Admin').parent().find('button').contains('Delete').click();
  //make sure swett alert visible
  cy.get('.swal-button-container').find('button').contains('OK').click();
  cy.get('.alert')
    .should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Deleted Successfully')
  ;
  cy.get('.table').should('not.contain', 'Anothor Admin');
})

it.only('user can delete data (User Baru)', () => {
  cy.get('.table td').contains('User baru').parent().find('button').contains('Delete').click();
  //make sure swett alert visible
  cy.get('.swal-button-container').find('button').contains('OK').click();
  cy.get('.alert')
    .should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Deleted Successfully')
  ;
  cy.get('.table').should('not.contain', 'User baru');
})

//negative test case
it('dummy', () => {
  //arrange
  //act
  //assert
})
})
