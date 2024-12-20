/* eslint-disable no-undef */
beforeEach(() => {
  //arrange
  cy.visit("http://localhost:5173/");
});
describe("hata mesajları", () => {
  it("email hatalı girilince bir hata mesajı görülüyor", () => {
    //arrange

    // act
    cy.get("#email").type("mehmet@");
    //assert
    cy.get(".error").should("have.length", 1);
  });
  it("email hatalı girilince hata mesajı doğru görülüyor", () => {
    //arrange

    // act
    cy.get("#email").type("mehmet@");
    //assert
    cy.get(".error").should("have.contain", "Geçerli bir email giriniz.");
  });
  it("buton disabled başlıyor", () => {
    //arrange

    //assert
    cy.get("[data-cy='submit-button']").should("be.disabled");
  });
  it("form doğru şekilde doldurunca form enabled oluyor", () => {
    //arrange

    // act
    cy.get("#email").type("mehmet@gmail.com");
    cy.get("#password").type("sjhD617897!");
    cy.get("[data-cy='terms']").check();
    //assert
    cy.get("[data-cy='submit-button']").should("be.enabled");
  });
  it("form doğru şekilde doldurunca form enabled oluyor", () => {
    //arrange

    // act
    cy.get("#email").type("mehmet@gmail.com");
    cy.get("#password").type("sjhD617897!");
    cy.get("[data-cy='terms']").check();
    cy.get("[data-cy='submit-button']").click();
    //assert
    cy.url().should("include", "/success");
  });
});

describe("form doldurma", () => {
  beforeEach(() => {
    //arrange

    // act
    cy.get("#email").type("mehmet@gmail.com");
    cy.get("#password").type("sjhD617897!");
    cy.get("[data-cy='terms']").check();
  });
  it("form doğru şekilde doldurunca form enabled oluyor", () => {
    //assert
    cy.get("[data-cy='submit-button']").should("be.enabled");
  });
});
