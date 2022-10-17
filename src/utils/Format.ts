/**
Função retorna o valor formatado de acordo 
com o número de caracteres.
*/
export function formatPhone(phone: string) {
  var formatNumber;
  var finalPhone;

  if (phone.length === 8) {
    formatNumber = phone.match(/(\d{4})(\d{4})/);
    finalPhone = formatNumber && formatNumber[1] + "-" + formatNumber[2];
  }
  if (phone.length === 9) {
    formatNumber = phone.match(/(\d{1})(\d{4})(\d{4})/);
    finalPhone =
      formatNumber &&
      formatNumber[1] + " " + formatNumber[2] + "-" + formatNumber[3];
  }

  if (phone.length === 11) {
    formatNumber = phone.match(/(\d{2})(\d{5})(\d{4})/);
    finalPhone =
      formatNumber &&
      "(" + formatNumber[1] + ") " + formatNumber[2] + "-" + formatNumber[3];
  }

  if (phone.length === 12) {
    formatNumber = phone.match(/(\d{2})(\d{1})(\d{5})(\d{4})/);
    finalPhone =
      formatNumber &&
      "(" +
        formatNumber[1] +
        ") " +
        formatNumber[2] +
        " " +
        formatNumber[3] +
        "-" +
        formatNumber[4];
  }

  if (phone.length === 13) {
    formatNumber = phone.match(/(\d{2})(\d{2})(\d{5})(\d{4})/);
    finalPhone =
      formatNumber &&
      "+ " +
        formatNumber[1] +
        " (" +
        formatNumber[2] +
        ") " +
        formatNumber[3] +
        "-" +
        formatNumber[4];
  }

  return finalPhone ? finalPhone : phone;
}
