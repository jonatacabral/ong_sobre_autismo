// Exemplo de template SPA
document.addEventListener('DOMContentLoaded', function(){
    const main = document.getElementById('content');
    const template = (titulo, texto) => `<section><h2>${titulo}</h2><p>${texto}</p></section>`;
    
    
});

// Botão para alternar modo alto contraste
const toggleContraste = document.createElement('button');
toggleContraste.textContent = 'Alto Contraste';
toggleContraste.style.position = 'fixed';
toggleContraste.style.bottom = '20px';
toggleContraste.style.right = '20px';
toggleContraste.style.zIndex = '1000';
toggleContraste.setAttribute('aria-label', 'Ativar ou desativar modo de alto contraste');
document.body.appendChild(toggleContraste);

toggleContraste.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
  const ativo = document.body.classList.contains('alto-contraste');
  toggleContraste.textContent = ativo ? 'Modo Padrão' : 'Alto Contraste';
});