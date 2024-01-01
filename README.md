# PressableOpacity Component

## Overview

PressableOpacity é um componente React Native personalizado que combina a flexibilidade do componente Pressable com o comportamento de opacidade do TouchableOpacity. Ele permite que os desenvolvedores apliquem um efeito de opacidade a qualquer elemento interativo de forma fácil e eficaz.

## Features

Efeito suave de opacidade ao pressionar, imitando o comportamento do TouchableOpacity.
Totalmente personalizável com estilos e propriedades.
Compatível com todos os elementos visuais do React Native.

## Instalação

Certifique-se de que você já tem o ambiente do React Native configurado no seu projeto. Então, copie o arquivo PressableOpacity.tsx para seu projeto.

## Usage
Primeiro, importe o componente PressableOpacity no seu arquivo:

```js
import { PressableOpacity } from './path/PressableOpacity';

// Depois, utilize o PressableOpacity como um substituto para TouchableOpacity ou Pressable:
<PressableOpacity onPress={() => console.log('Pressed!')} style={styles.pressableStyle}>
<Text>Press Me!</Text>
</PressableOpacity>
``````

## Props

Além das props padrões do Pressable, PressableOpacity aceita as seguintes props personalizadas:

activeOpacity: Um número que define a opacidade quando o botão é pressionado. Padrão é 0.5.

## Personalização

Você pode estilizar o PressableOpacity como qualquer outro componente do React Native:

```js
const styles = StyleSheet.create({
  pressableStyle: {
  padding: 10,
  backgroundColor: '#DDDDDD',
  alignItems: 'center',
},
  // Outros estilos...
});
```

Contribua 

Pull requests são bem-vindos. Para mudanças maiores, por favor abra um issue primeiro para discutir o que você gostaria de mudar.