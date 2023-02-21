Fluxo de renderização:

1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
2. Toda vez que o seu componente PAI renderizar
3. Toda vez que alguma das suas propriedades mudarem

Algoritmo de reconciliação:

1. Crair em memória a nova versão do HTML do componente
2. Compara essa nova versão com a versão anterior do HTML(Diff)
3. Aplicar as operações JavaScript para alterar somente o necessário do HTML