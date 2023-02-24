# Design responsivo do Twitter usando React.js

![index_imagem](https://github.com/Samuelloliiveira/ui-twitter/blob/main/src/assets/ui-twitter.png?raw=true)

- Após fazer git clone do projeto use o comando: npm install <br/>
- Executar projeto: npm run dev

##

## Conteúdo importante sobre o REACT

Fluxo de renderização:

1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
2. Toda vez que o seu componente PAI renderizar.
3. Toda vez que alguma das suas propriedades mudarem.

Algoritmo de reconciliação:

1. Cria em memória a nova versão do HTML do componente.
2. Compara essa nova versão com a versão anterior do HTML(Diff).
3. Aplicar as operações JavaScript para alterar somente o necessário do HTML.

##

// forEach ⇾ Não tem retorno. <br/>
// map ⇾ Tem retorno. <br/>
// Controlled Components ⇾ conceito de anotar o valor enquanto o usuário digita. <br/>
// Imutabilidade ⇾ Nunca alteramos informações no React, criamos versões da informação. <br/>
// Contexto ⇾ Existe locais no React que conseguimos ter acessos a informações e em outros não. <br/>

##

// auto grow textarea react ⇾ Para o Autosize (no caso eu usei a biblioteca @mui/base)
