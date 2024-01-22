
# FadeScroll.js

## Funcionamento
O **FadeScroll.js** é um script leve e fácil de usar para adicionar efeitos de fade em elementos HTML durante o scroll da página. Siga as instruções abaixo para integrar e personalizar a animação conforme sua preferência.

## Instalação
1. Faça o download do arquivo FadeScroll.js.
2. Adicione o seguinte código no final do corpo do seu arquivo HTML:
```html
<script src="caminho/para/FadeScroll.js"></script>
```

## Uso
Para aplicar o efeito de fade, adicione a classe `<div class="fade-effect">` ao elemento HTML desejado. Utilize os seguintes atributos para personalizar a animação:

### Direção:
- Superior: `<div class="fade-effect" fade-direction="top">`
- Inferior: `<div class="fade-effect" fade-direction="bottom">`
- Esquerda: `<div class="fade-effect" fade-direction="left">`
- Direita: `<div class="fade-effect" fade-direction="right">`

### Tempo:
O tempo é especificado em segundos.
- Para 1 segundo, utilize: `<div class="fade-effect" fade-time="1">`
- Para 500 milissegundos, utilize: `<div class="fade-effect" fade-time=".5">`

## Exemplo
```html
<div class="fade-effect" fade-direction="bottom" fade-time="2">
  <!-- Seu conteúdo aqui -->
</div>
```

Este exemplo aplicará um efeito de fade na direção inferior com uma duração de 2 segundos. Sinta-se à vontade para experimentar e ajustar os atributos conforme necessário para atender às suas preferências.
