document.addEventListener('DOMContentLoaded', function() {
  const lista = document.getElementById('minha-lista');
  const btnToggle = document.getElementById('botao_ver_mais');
  const itens = lista.getElementsByTagName('li');
  const numeroInicialDeItens = 9;

  btnToggle.addEventListener('click', function() {
    // Verifica se a lista está expandida ou não
    const estaExpandida = btnToggle.textContent === 'Ver menos';

    if (estaExpandida) {
      // Se estiver expandida, esconde os itens extras
      for (let i = numeroInicialDeItens; i < itens.length; i++) {
        itens[i].style.display = 'none';
      }
      btnToggle.textContent = 'Ver mais';
    } else {
      // Se não estiver expandida, mostra todos os itens
      for (let i = 0; i < itens.length; i++) {
        itens[i].style.display = 'list-item';
      }
      btnToggle.textContent = 'Ver menos';
    }
  });
});