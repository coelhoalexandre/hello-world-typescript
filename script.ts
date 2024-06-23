interface IUsuario {
  nome: string;
  sobrenome: string;
  idade: number;
}
function chamarOlaMundo() {
  return "Hello World";
}

function chamarBoasVindas(nome: string, sobrenome: string) {
  return "Boas-vindas ao TypeScript, " + nome + " " + sobrenome + "!";
}

const usuario: IUsuario = {
  nome: "Alexandre",
  sobrenome: "Coelho",
};

alert(chamarOlaMundo());

alert(chamarBoasVindas(usuario.nome, usuario.sobrenome, usuario.idade));
