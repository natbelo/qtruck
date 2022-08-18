

class MapPage {
    
    loggedUser(nome) {
        cy.get('.logged-user')
        .should('be.visible')
        .should('have.text', `Olá, ${nome}`)
    }
}

export default new MapPage()