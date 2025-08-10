# Seletores CSS

A `class` (classe) é a nossa ferramenta para aplicar um mesmo conjunto de estilos a **vários elementos** que devem ter a mesma aparência. Pense nela como uma "etiqueta" que você pode colocar em quantos elementos quiser.

* **Sintaxe no CSS:** `.` (ponto)
* **Sintaxe no HTML:** `class="..."`

## IDs vs. Classes em CSS

Tanto IDs quanto Classes servem para selecionar elementos HTML, mas cada um tem um propósito claro. Entender quando usar cada um é a chave para um código CSS organizado, eficiente e acessível.

### ID (`#`) - O Identificador Único

Pense no ID como o RG de um elemento: **só pode existir um por página**.

* **Como usar:**
    * **CSS:** ` #meu-id { ... } `
    * **HTML:** ` <div id="meu-id"> ... </div> `
* **Quando usar:**
    * Para **elementos estruturais únicos** na página, como o cabeçalho principal, o menu de navegação ou o rodapé.
    * Para criar **links de âncora** (`<a href="#secao-contato">`), que levam o usuário a uma parte específica da página.
* **Acessibilidade e Boas Práticas:**
    * **Regra de Ouro:** Nunca repita um ID na mesma página. Isso invalida o HTML e pode quebrar funcionalidades de leitores de tela e JavaScript.
    * O uso de âncoras é uma excelente prática de acessibilidade, pois permite que os usuários naveguem pelo conteúdo de forma mais rápida.

### Classe (`.`) - A Etiqueta Versátil

Pense na Classe como uma etiqueta que você pode aplicar a **quantos elementos quiser**.

* **Como usar:**
    * **CSS:** ` .minha-classe { ... } `
    * **HTML:** ` <button class="minha-classe"> ... </button> `
* **Quando usar:**
    * Para **agrupar elementos** que compartilham o mesmo estilo (ex: botões, cards, alertas, textos destacados).
    * Um mesmo elemento pode ter **várias classes**, permitindo combinar estilos de forma modular (ex: `<div class="card destaque">`).
* **Acessibilidade e Boas Práticas:**
    * Dê nomes de classes que descrevam a **função** do elemento, não a sua aparência (ex: use `.alerta-erro` em vez de `.texto-vermelho`). Isso torna seu código mais fácil de manter e mais semântico.

| Característica | ID (`#`) | Classe (`.`) |
| :--- | :--- | :--- |
| **Uso Principal** | Identificador de elemento **único** | Agrupador de **múltiplos** elementos |
| **Sintaxe CSS** | `#` | `.` |
| **Permitido por Página** | Apenas um com o mesmo nome | Infinitos com o mesmo nome |
| **Uso em um Elemento**| Apenas um ID por elemento | Várias classes por elemento |

Resumindo a história: precisa de um estilo para **um único** elemento estrutural? Use um `id`. Precisa do mesmo estilo para **vários** elementos? Use uma `class`.

### Especificidade (A Regra do Mais Forte)

Quando mais de uma regra CSS tenta estilizar o mesmo elemento, o navegador usa a especificidade para decidir qual delas "vence". A hierarquia é simples:

  * 🥇 **1º Lugar: ID (`#`)** - É o seletor mais específico e quase sempre ganha a disputa.
  * 🥈 **2º Lugar: Classe (`.`)** - É menos específico que um ID, mas ganha de um seletor de elemento.
  * 🥉 **3º Lugar: Elemento (`p`, `div`, etc.)** - É o mais geral e perde para os outros dois.

**Exemplo Prático:**

```html
<p id="paragrafo-unico" class="texto-geral">Olá, mundo!</p>
```

```css
#paragrafo-unico { color: red; }  /* Vencedor! 🥇 */
.texto-geral    { color: blue; } /* Perde para o ID. 🥈 */
p                { color: gray; } /* Perde para ambos. 🥉 */
```

O texto será **vermelho**, pois a regra do ID é a mais forte.