let pessoa = {
    nome: "Giovanna Rocha",
    idade: 21,
    altura: 1.58,
    cargo: "Jovem Aprendiz Industrial",
};

//com concatenação
document.write("Nome: " + pessoa.nome + " ");
document.write("idade:" + pessoa.idade + "<br>");

//com typescript
document.write(`Nome: ${pessoa.nome}<br>idade: ${pessoa.idade}`);

//juntando array com objetos
let usuarios = [
    { nome: "Fulano", cargo: "Dev Junior", status: "Ativo" },
    { nome: "Bertano", cargo: "Dev Pleno", status: "Ativo" },
    { nome: "Asdrubal", cargo: "Dev Senior", status: "Ativo" },
];

document.write("<br>nome: " + usuarios[1].nome + "<br>");
document.write("cargo: " + usuarios[1].cargo + "<br>");
document.write("status: " + usuarios[1].status + "<br>");

document.write(`Nome: ${usuarios[1].nome} <br>Cargo: ${usuarios[1].cargo} <br>Status: ${usuarios[1].status}`);