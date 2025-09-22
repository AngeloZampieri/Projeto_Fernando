document.addEventListener('DOMContentLoaded', function () {
  const lista = document.getElementById('minha-lista'); const btnToggle = document.getElementById('botao_ver_mais'); const itens = lista.getElementsByTagName('li'); const numeroInicialDeItens = 9; btnToggle.addEventListener('click', function () {
    const estaExpandida = btnToggle.textContent === 'Ver menos'; if (estaExpandida) {
      for (let i = numeroInicialDeItens; i < itens.length; i++) { itens[i].style.display = 'none' }
      btnToggle.textContent = 'Ver mais'
    } else {
      for (let i = 0; i < itens.length; i++) { itens[i].style.display = 'list-item' }
      btnToggle.textContent = 'Ver menos'
    }
  })
})