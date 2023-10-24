export const Addspace = (text: string, quantityCharacters: number) => {
  let result = ""
  let cont = 0
  for (let i = 0; i < text.length; i++) {
    result += text[i]

    if (text[i] === " ") {
      cont = 0 // Restablecer el cont si encontramos un espacio
    } else {
      cont++
    }

    if (cont === quantityCharacters && i !== text.length - 1) {
      result += " "
      cont = 0 // Restablecer el cont después de agregar un espacio
    }
  }

  return result
}
