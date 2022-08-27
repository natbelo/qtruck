import mapPage from '../support/pages/Map'


describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {

        const user = {
            name: 'StarThree',
            instagram: '@star_three',
            password: 'test321'
          }
    
        const foodtruck = {
            latitude:'-8.040216291444045',
            longitude: '-34.94364934555052',
            name: 'The office',
            description: 'Teste QA',
            opening_hours: '08h as 17h'
        }
    
        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude,foodtruck.longitude)
        
        cy.wait(30000)

    })

    
    
});