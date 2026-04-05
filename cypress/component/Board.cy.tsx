import { Board } from '../../src/Board'

function render() {
  const animals = {
    Kura: 'img/kura.png',
    Kaczka: 'img/kaczka.png',
  }

  cy.mount(
    <div className="min-h-screen bg-green-100 py-8">
      <Board animals={animals} />
    </div>,
  )
}

describe('Board Component', { viewportWidth: 800 }, () => {
  it('renders correctly', () => {
    render()
    cy.get('h1').should('not.exist') // Board doesn't have h1, App does.
    cy.contains('Dopasowane 0 / 2').should('be.visible')
  })

  it('allows matching animals', () => {
    render()

    // Find the picture card for Kura
    cy.get('[alt="Kura"]').click()

    // Find the text card for Kura
    cy.contains('Kura').click()

    // Should be matched
    cy.contains('Dopasowane 1 / 2').should('be.visible')
  })

  it('resets the board', () => {
    render()

    cy.get('[alt="Kura"]').click()
    cy.contains('Kura').click()
    cy.contains('Dopasowane 1 / 2').should('be.visible')

    cy.contains('RESET').click()
    cy.contains('Dopasowane 0 / 2').should('be.visible')
  })
})
