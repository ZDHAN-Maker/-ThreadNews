/* eslint-disable no-undef */
/**
 * Skenario Testing:
 * 1. User membuka halaman login
 * 2. User mengisi email dan password
 * 3. User menekan tombol login
 * 4. User berhasil masuk ke halaman home
 */

describe('Login Flow', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[type="email"]').type('test@mail.com');

    cy.get('input[type="password"]').type('123456');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/');
  });
});
