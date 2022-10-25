/// <reference types="cypress" />

import { format } from 'path'
import LOCATORS from '../../support/Elements'

context('Ações Entrada e Saida e Removação', () => {
  before(() => {
    cy.visit('https://maratona-discover-devfinance.netlify.app/')

  })

  it('Dado que o usuário Inclua Entrada', () => {

    const Lucro = 'Compras'

    cy.get('#data-table tbody tr').should('have.length', 0)
    cy.get(LOCATORS.TRANSACAO.BTN_TRANSACAO).click()
    cy.get(LOCATORS.TRANSACAO.DESCRICAO).type(Lucro)
    cy.get(LOCATORS.TRANSACAO.VALOR).type('500')
    cy.get(LOCATORS.TRANSACAO.DATA).type('2022-09-26')
    cy.get(LOCATORS.TRANSACAO.BTN_SALVAR).contains(LOCATORS.TRANSACAO.SALVAR).click()
    cy.screenshot('Resultado das Compras')

    cy.get('#data-table tbody tr').should('have.length', 1)

    cy.contains(Lucro)
      .parent()
      .find(LOCATORS.TRANSACAO.ICON_REMOVER)
      .click()

  })

  it('Dado que o usuário Inclua Saida', () => {

    const gastos = 'Contas'

    cy.get(LOCATORS.TRANSACAO.BTN_TRANSACAO).click()
    cy.get(LOCATORS.TRANSACAO.DESCRICAO).type(gastos)
    cy.get(LOCATORS.TRANSACAO.VALOR).type('-350')
    cy.get(LOCATORS.TRANSACAO.DATA).type('2022-10-22')
    cy.get(LOCATORS.TRANSACAO.BTN_SALVAR).contains(LOCATORS.TRANSACAO.SALVAR).click()
    cy.screenshot('Resultado da Saída')

    cy.contains(gastos)
      .parent()
      .find(LOCATORS.TRANSACAO.ICON_REMOVER)
      .click()

  })

  it('Remover entras e saídas', () => {
    const entrada = 'Orcamento'
    const saida = 'Despesas'

    cy.get(LOCATORS.TRANSACAO.BTN_TRANSACAO).click()
    cy.get(LOCATORS.TRANSACAO.DESCRICAO).type(entrada)
    cy.get(LOCATORS.TRANSACAO.VALOR).type(100)
    cy.get(LOCATORS.TRANSACAO.DATA).type('2022-10-22')
    cy.get(LOCATORS.TRANSACAO.BTN_SALVAR).contains(LOCATORS.TRANSACAO.SALVAR).click()

    cy.get(LOCATORS.TRANSACAO.BTN_TRANSACAO).click()
    cy.get(LOCATORS.TRANSACAO.DESCRICAO).type(saida)
    cy.get(LOCATORS.TRANSACAO.VALOR).type(-35)
    cy.get(LOCATORS.TRANSACAO.DATA).type('2022-10-22')
    cy.get(LOCATORS.TRANSACAO.BTN_SALVAR).contains(LOCATORS.TRANSACAO.SALVAR).click()

    cy.contains(entrada)
      .parent()
      .find(LOCATORS.TRANSACAO.ICON_REMOVER)
      .click()

    cy.contains(saida)
      .parent()
      .find(LOCATORS.TRANSACAO.ICON_REMOVER)
      .click()
      cy.screenshot('Resultado das Transações')

  })

})
