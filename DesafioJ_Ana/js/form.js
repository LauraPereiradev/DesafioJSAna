class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.email = email;
      this.cpf = cpf;
      this.telefone = telefone;
      this.contato = contato;
      this.dataEnvio = new Date().toLocaleString("pt-BR");
    }
  }
  
  
  function Post(form) {
    event.preventDefault(); 
  
    
    const novoContato = new Contato(
      form.elements.namedItem("nome").value.trim(),
      form.elements.namedItem("sobrenome").value.trim(),
      form.elements.namedItem("email").value.trim(),
      form.elements.namedItem("cpf").value.trim(),
      form.elements.namedItem("telefone").value.trim(),
      form.elements.namedItem("contato").value
    );
  
    
    if (
      !novoContato.nome ||
      !novoContato.sobrenome ||
      !novoContato.email ||
      !novoContato.cpf ||
      !novoContato.telefone ||
      novoContato.contato === "COMO DESEJA SER CONTATADO"
    ) {
      alert("Por favor, preencha todos os campos obrigatórios (*) antes de enviar.");
      return false;
    }
  
    
    alert(`Obrigado, sr(a) ${novoContato.nome}, seus dados foram encaminhados com sucesso! Brevemente, entraremos em contato.`);
  
    
    console.group("Dados do formulário enviado");
    console.log("Nome:", novoContato.nome);
    console.log("Sobrenome:", novoContato.sobrenome);
    console.log("E-mail:", novoContato.email);
    console.log("CPF:", novoContato.cpf);
    console.log("Telefone:", novoContato.telefone);
    console.log("Contato por:", novoContato.contato);
    console.log("Data de envio:", novoContato.dataEnvio);
    console.groupEnd();
  
    
    try {
      const chave = "formularios_enviados";
      const registros = JSON.parse(localStorage.getItem(chave)) || [];
      registros.push(novoContato);
      localStorage.setItem(chave, JSON.stringify(registros));
    } catch (erro) {
      console.error("Erro ao salvar no localStorage:", erro);
    }
  
    
    form.reset();
    return false;
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector('form button[type="submit"]');
    if (botao) {
      botao.style.transition = "transform 0.25s ease, background-color 0.25s ease";
      botao.addEventListener("mouseenter", () => {
        botao.style.transform = "scale(1.1)";
        botao.style.backgroundColor = "#1e88e5";
        botao.style.color = "#fff";
      });
      botao.addEventListener("mouseleave", () => {
        botao.style.transform = "scale(1)";
        botao.style.backgroundColor = "";
        botao.style.color = "";
      });
    }
  });
