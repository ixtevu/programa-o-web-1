function saudar(nome) {
  return `Olá, ${nome}!`;
}

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function apresentarProduto(nomeProduto, preco = 0) {
  return `Produto: ${nomeProduto} - Preço: R$ ${preco}`;
}

document.getElementById("btnSaudar").addEventListener("click", function() {
  let nome = document.getElementById("nome").value;
  document.getElementById("resSaudacao").innerText = saudar(nome);
});

document.getElementById("btnMedia").addEventListener("click", function() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let n3 = Number(document.getElementById("n3").value);
  document.getElementById("resMedia").innerText = "Média: " + calcularMedia(n1, n2, n3);
});

document.getElementById("btnProduto").addEventListener("click", function() {
  let nomeProduto = document.getElementById("nomeProduto").value;
  let precoProduto = document.getElementById("precoProduto").value;
  if (precoProduto === "") {
    document.getElementById("resProduto").innerText = apresentarProduto(nomeProduto);
  } else {
    document.getElementById("resProduto").innerText = apresentarProduto(nomeProduto, Number(precoProduto));
  }
});
