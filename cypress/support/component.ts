import './commands'
import { mount } from 'cypress/react'
import '../../src/index.css'

// Augment the Cypress namespace to include the `mount` command
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)
