import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {

    it('deve cadastrar novo usuário', ()=>{

        //Dado que tenho um usuário
        const user = {
            nome: 'Star One',
            instagram: '@star_one',
            password: 'test321'
        }
        //E esse usuário não existe no banco
        // cy.deleteMany({instagram: user.instagram}, {collection:'user'}).then(res => { 
        //     cy.log(res) 
        // })

        //Quando o cadastro do mesmo é realizado
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        //Então mensagem de sucesso é exibida
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')


    })

})