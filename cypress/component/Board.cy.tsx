import { Board } from '../../src/Board'

describe('Board Component', () => {
  const animals = {
    Kura: '/img/kura.png',
    Kaczka: '/img/kaczka.png',
  }

  it('renders correctly', () => {
    cy.mount(<Board animals={animals} />)
    cy.get('h1').should('not.exist') // Board doesn't have h1, App does.
    cy.contains('Dopasowane 0 / 2').should('be.visible')
  })

  it('allows matching animals', () => {
    cy.mount(<Board animals={animals} />)

    // Find the picture card for Kura
    cy.get('[alt="Kura"]').click()

    // Find the text card for Kura
    cy.contains('Kura').click()

    // Should be matched
    cy.contains('Dopasowane 1 / 2').should('be.visible')
  })

  it('resets the board', () => {
    cy.mount(<Board animals={animals} />)

    cy.get('[alt="Kura"]').click()
    cy.contains('Kura').click()
    cy.contains('Dopasowane 1 / 2').should('be.visible')

    cy.contains('RESET').click()
    cy.contains('Dopasowane 0 / 2').should('be.visible')
  })
})
