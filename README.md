# Projeto Frontend - Controle de Produtos

Este repositório contém o frontend da aplicação de Controle de Produtos, construído com React, Vite e Tailwind CSS.

## Estrutura do projeto

- `frontend/`: aplicação React responsável pela interface do sistema.
- `frontend/src/`: código-fonte principal da aplicação.
- `frontend/src/pages/`: páginas do app, incluindo a nova `LandingPage`.
- `frontend/src/components/`: componentes reutilizáveis de UI.
- `frontend/src/context/`: contexto de autenticação.

## Pré-requisitos

Certifique-se de ter instalado no seu ambiente:

- Node.js 18.x ou 20.x (compatível com Vite 6.x)
- npm 10.x ou 12.x

> Observação: o projeto está configurado para funcionar com `vite` versão `^6.4.2`, pois versões mais novas podem exigir Node `22.12+`.

## Passo a passo

1. Abra um terminal no diretório do repositório:

   ```bash
   cd C:\Users\Aluno\Desktop\frontend-api
   ```

2. Entre na pasta do frontend:

   ```bash
   cd frontend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse a URL exibida no terminal, geralmente:

   ```text
   http://localhost:4173
   ```

6. Para gerar uma versão de produção:

   ```bash
   npm run build
   ```

7. Para testar localmente o build final:
   ```bash
   npm run preview
   ```

## O que foi adicionado

- Página de entrada (`LandingPage`) com navegação e seções sobre o sistema.
- Tema mais claro e layout responsivo para desktop, tablet e celular.
- Rotas atualizadas para usar o landing page como página inicial.
- Compatibilidade confirmada com `npm run build` no Vite `6.4.2`.

## Dicas rápidas

- Se o `npm run dev` não iniciar, confirme a versão do Node com:
  ```bash
  node -v
  ```
- Se você estiver usando Node `22.11.0`, mantenha a versão do Vite em `6.x` para evitar erros de compatibilidade.
- Caso precise atualizar o backend, conecte o frontend ao endpoint correspondente via `frontend/src/api/axios.js`.

---

_Desenvolvido como parte dos requisitos técnicos de integração entre Frontend e Backend._
