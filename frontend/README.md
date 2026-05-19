# Frontend - Controle de Produtos

Este é o frontend da aplicação de Controle de Produtos, desenvolvido com **React**, **Vite**, **Tailwind CSS** e **Axios**.

## Funcionalidades
- **Autenticação:** Login seguro para administradores.
- **Dashboard de Produtos:** Listagem responsiva em cards.
- **Gerenciamento:** Cadastro de novos produtos e exclusão.
- **Filtros:** Filtragem de produtos por categoria em tempo real.
- **Responsividade:** Interface adaptável para dispositivos móveis e desktop.

## Tecnologias Utilizadas
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/) (Ícones)

## Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Backend Spring Boot rodando em `http://localhost:8080`

## Instalação e Execução

1. Clone o repositório e navegue até a pasta do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173` (ou a porta indicada pelo Vite).

## Configuração de CORS
Certifique-se de que o backend Spring Boot está configurado para permitir requisições da origem do frontend. Exemplo no Spring Boot:

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
    }
}
```

## Credenciais de Acesso
- **E-mail:** admin@example.com (ou conforme configurado no seu banco)
- **Senha:** admin
