describe('Login', () => {
  it('logar com sucesso', () => {

    const user = {
      nome: 'Natália',
      instagram: '@natisbelo',
      password: 'natbelo'
    }

    cy.login(user)

    cy.loggedUser(user.nome)

  })

  it('nao deve logar com senha invalida', ()=>{
    const user = {
      instagram: '@natisbelo',
      password: 'nat123'
    }

    cy.login(user)

    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar com instagram inexistente', ()=>{
    const user = {
      instagram: '@nbelo',
      password: 'nat123'
    }
    
    cy.login(user)

    cy.modalHaveText('Credenciais inválidas, tente novamente!')
  })
 

})

