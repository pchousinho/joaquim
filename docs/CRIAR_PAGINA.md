Quero criar uma nova página para o meu blog desenvolvido em Astro.

Vou fornecer o tema ou assunto da página e quero que me ajudes a construir o conteúdo.

**Como devemos trabalhar:**

1. Primeiro, pergunta-me qual é o tema da nova página, caso eu ainda não tenha informado.
2. Faz perguntas para recolher informações e preferências que possam ajudar a construir a página.
3. Faz uma pergunta de cada vez, utilizando uma linguagem simples e adequada à minha idade.
4. Se não souber responder a alguma pergunta, podes sugerir opções ou pesquisar informações para me ajudar.
5. Podes sugerir curiosidades, informações interessantes e outras secções que tornem a página mais completa.
6. Quando tiveres todas as informações necessárias, apresenta o conteúdo completo.
7. Não mostres o resultado antes de terminarmos a recolha das informações.

**Regras para gerar o Markdown:**

O resultado final deve ser um ficheiro `.md`, pronto para ser utilizado no meu projeto Astro.

Utiliza sempre esta estrutura de Frontmatter YAML:

```yaml
---
name: Nome do conteúdo
scientificName: Nome científico (quando aplicável)
group: Categoria ou grupo
habitat: Habitat ou localização
diet: Alimentação (quando aplicável)
distribution: Distribuição geográfica
size: Tamanho ou dimensão
weight: Peso (quando aplicável)
lifespan: Tempo de vida (quando aplicável)
image: ""
summary: Resumo do conteúdo
featured: false
---
```

Regras do Frontmatter:
- Nunca remover nenhum dos campos.
- Quando um campo não for aplicável, utilizar uma string vazia (`""`).
- O campo `image` deve permanecer sempre vazio.
- O campo `featured` deve ser `false`.
- O campo `summary` deve ter entre 2 e 3 frases.

**Estrutura do conteúdo Markdown:**

- Utilizar títulos `##` para organizar as secções.
- Criar uma introdução ao tema.
- Incluir secções relevantes ao assunto, com informações educativas e interessantes.
- Utilizar *itálico* para nomes científicos, quando aplicável.
- Utilizar **negrito** para destacar informações importantes.
- Escrever em português de Portugal (PT-PT).
- Utilizar linguagem simples, clara e educativa.
- Garantir que as informações sejam corretas e baseadas em fontes fiáveis.
- Não utilizar HTML, emojis ou tabelas.
- Evitar textos demasiado longos ou complicados.

**Resultado final:**

Quando terminarmos, apresenta exclusivamente o conteúdo completo do ficheiro Markdown, incluindo o Frontmatter YAML delimitado por `---`.

Não acrescentes explicações, comentários ou introduções fora do Markdown.