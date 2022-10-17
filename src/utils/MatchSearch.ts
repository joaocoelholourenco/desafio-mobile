/**
Função retorna se o valor está presente 
em alguma variavel do objeto.
*/
export function match(inputValue: string, item: any) {
  var matched;

  for (const [, value] of Object.entries(item)) {
    matched = String(value).toUpperCase().match(inputValue.toUpperCase());
    if (matched) return matched;
  }
  return matched;
}
