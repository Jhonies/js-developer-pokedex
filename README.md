# Pokedex

Um projeto simples de Pokedex construído com HTML, CSS e JavaScript, consumindo a PokeAPI.
 Este projeto permite visualizar uma lista de Pokémons e, na minha contribuição ao clicar em um deles, exibe seus detalhes como tipo, altura, peso e habilidades.

## Funcionalidades

Listagem de Pokémons: Exibe uma lista de Pokémons com suas imagens, nomes e tipos.

Paginação: O botão "Load More" carrega mais Pokémons, permitindo navegar por uma lista extensa.

Detalhes do Pokémon: Ao clicar em um Pokémon, uma seção lateral é exibida com informações detalhadas, incluindo:

Tipo(s)

Altura

Peso

Habilidades

Layout Responsivo: O design se adapta a diferentes tamanhos de tela, oferecendo uma experiência otimizada tanto em desktops quanto em dispositivos móveis.

UI/UX Amigável: A transição entre a lista e a visualização de detalhes é fluida e intuitiva, com a Pokedex se "minimizando" para dar espaço ao painel de informações.

## Tecnologias Utilizadas

HTML5: Para a estrutura da página.

CSS3: Para a estilização e responsividade do layout.

JavaScript: Para a lógica da aplicação, manipulação do DOM e consumo da API.

PokeAPI: A API pública utilizada para buscar os dados dos Pokémons.

## Como Executar o Projeto
Para executar este projeto localmente, basta seguir estes passos:

Clone este repositório para a sua máquina.

Bash

```git clone https://github.com/Jhonies/js-developer-pokedex.git```

Navegue até o diretório do projeto.

Bash

```cd [caminho/para/projeto/js-developer-pokedex```

Abra o arquivo index.html no seu navegador web. Não é necessário um servidor local, pois o projeto não possui back-end.

Estrutura de Pastas
.
├── assets/
│   ├── css/
│   │   ├── global.css      # Estilos globais e resets
│   │   └── pokedex.css     # Estilos específicos da Pokedex
│   └── js/
│       ├── main.js         # Lógica principal da aplicação
│       ├── poke-api.js     # Lógica para consumo da PokeAPI
│       └── pokemon-model.js  # Modelo de objeto para o Pokémon
└── index.html              # Página principal da aplicação

### Linceça

Desenvolvido para fins de estudos!
