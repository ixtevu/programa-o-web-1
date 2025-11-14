let livro = {
  titulo: "Harry Potter e a Pedra Filosofal",
  autor: "J.K. Rowling",
  paginas: 264,
  disponivel: true
};

console.log(livro.titulo);
console.log(livro["autor"]);

livro.editora = "Rocco";

livro.detalhes = function () {
  return `O livro "${this.titulo}", escrito por ${this.autor}, possui ${this.paginas} páginas e é publicado pela editora ${this.editora}.`;
};

console.log(livro.detalhes());

let biblioteca = {
  livros: [livro]
};

console.log(biblioteca);
