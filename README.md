# Site Profissional – Débora Reis | Consultoria em Cibersegurança

Este repositório contém o código-fonte do meu **site profissional de consultoria em cibersegurança**, criado para centralizar conteúdos técnicos, artigos, serviços e um canal de contato para consultorias.

O site evoluiu de um espaço pessoal de anotações e estudos para uma plataforma estruturada de **compartilhamento de conhecimento** e **apresentação profissional**, com foco em segurança da informação, LGPD, cloud security e boas práticas de mercado.

---

## ✨ Objetivo do projeto

* Registrar e organizar meus conhecimentos técnicos
* Compartilhar conteúdos educativos sobre cibersegurança
* Divulgar serviços de consultoria de forma clara e profissional
* Disponibilizar um canal simples de contato

O projeto **não utiliza backend nem banco de dados**. Todo o conteúdo é gerenciado de forma **estática e manual**, o que reduz complexidade e custos de manutenção.

---

## 🧩 Estrutura do site

O site é composto pelas seguintes seções:

* **Home** – Apresentação pessoal, links para redes profissionais
* **Sobre** – Resumo da minha trajetória e abordagem profissional
* **Blog** – Lista de artigos técnicos escritos em Markdown/TypeScript
* **Post individual** – Renderização dinâmica dos artigos
* **Serviços** – Cards com áreas de atuação em consultoria
* **Contato** – Chamada para conversa e links de contato

---

## 🛠️ Tecnologias utilizadas

* **React + TypeScript**
* **Vite** (build e desenvolvimento)
* **React Router DOM** (roteamento)
* **Tailwind CSS** (estilização)
* **Lucide Icons** (ícones)
* **React Markdown** (renderização de conteúdo)

---

## 📂 Organização do projeto

```bash
src/
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas principais do site
├── data/              # Conteúdo estático (posts, serviços, etc.)
├── assets/            # Imagens e arquivos estáticos
├── styles/            # Estilos globais
└── main.tsx           # Ponto de entrada da aplicação
```

Os posts do blog ficam centralizados em arquivos `.ts`, permitindo controle total do conteúdo sem necessidade de CMS.

---

## ▶️ Como rodar o projeto localmente

### Pré-requisitos

* **Node.js** (versão 18 ou superior)
* **npm** ou **yarn**

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd seu-repositorio
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador:

```
http://localhost:5173
```

---

## ✍️ Conteúdo e manutenção

* Os textos do blog são adicionados manualmente
* Não há painel administrativo
* O versionamento garante histórico e controle total do conteúdo

Esse modelo foi escolhido propositalmente para manter **simplicidade, segurança e baixo custo**.

---

## 📬 Contato

Se quiser conversar sobre cibersegurança, LGPD, cloud ou consultoria:

* 🌐 Site: [https://deborareis.net.br](https://deborareis.net.br)
* 💼 LinkedIn: [https://www.linkedin.com/in/deborareis](https://www.linkedin.com/in/deborareis)

---

## 📄 Licença

Este projeto é de uso pessoal/profissional. O conteúdo não deve ser reproduzido sem autorização.
