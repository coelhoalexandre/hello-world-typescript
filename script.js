function chamarOlaMundo() {
    return "Hello World";
}
function chamarBoasVindas(nome, sobrenome) {
    return "Boas-vindas ao TypeScript, " + nome + " " + sobrenome + "!";
}
var usuario = {
    nome: "Alexandre",
    sobrenome: "Coelho",
};
alert(chamarOlaMundo());
alert(chamarBoasVindas(usuario.nome, usuario.sobrenome));
