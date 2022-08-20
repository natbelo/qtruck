import modal from '../components/Modal'

class SignupPage{

    constructor() {
        this.modal = modal 
    }

    
    go() {
        cy.visit('/signup')
    }
    
    form(user) {

        if (user.nome) cy.get('input[name=name]').type(user.nome)
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
        if (user.password) cy.get('input[name=password]').type(user.password)
    }

    submit() {
        cy.contains('button','Cadastrar').click()
    }

}

export default new SignupPage()