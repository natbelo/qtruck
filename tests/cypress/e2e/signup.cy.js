import signupPage from '../support/pages/Signup'

describe('Signup', ()=> {

    it('deve cadastrar novo usuário', ()=>{

        //Dado que tenho um usuário
        const user = {
            name: 'Star One',
            instagram: '@star_one',
            password: 'test321'
        }
        //E esse usuário não existe no banco
        // cy.deleteMany({instagram: user.instagram}, {collection:'users'}).then(res => { 
        //     cy.log(res) 
        // })

        cy.apiResetUser(user.instagram)

        //Quando o cadastro do mesmo é realizado
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        //Então mensagem de sucesso é exibida
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')


    })

    it.only('não deve cadastrar com instagram duplicado', () => {

        //Dado que tenho um usuário
        const user = {
            name: 'Star two',
            instagram: '@star_two',
            password: 'test321'
        }
        
        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Instagram já cadastrado!')


    })

    

})



