import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  it('logar com sucesso', () => {

    const user = {
      name: 'Natália',
      instagram: '@natisbelo',
      password: 'natbelo'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)

    

  })

  it('nao deve logar com senha invalida', ()=>{
    const user = {
      instagram: '@natisbelo',
      password: 'nat123'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('nao deve logar com instagram inexistente', ()=>{
    const user = {
      instagram: '@nbelo',
      password: 'nat123'
    }
    
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('instagram é obrigatório', ()=>{
    const user = {
      password: 'nat123'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('senha é obrigatória', ()=>{
    const user = {
      instagram: 'natisbelo'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('todos os campos são obrigatórios', ()=>{
    
    loginPage.go()
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })
 

})

