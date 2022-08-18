import modal from '../components/Modal'

class LoginPage{

    constructor() {
        this.modal = modal //propriedade que acessa a classe Modal
    }

    //função que acessa a página del ogin
    go() {
        cy.visit('/')
    }
    //função que preenche o formulário
    form(user) {
        if (user.instagram) cy.get('input[name=instagram]').type(user.instagram)
        if (user.password) cy.get('input[name=password]').type(user.password)
    }

    submit() {
        cy.contains('button','Entrar').click()
    }

}

export default new LoginPage() //exporta a classe já instanciada