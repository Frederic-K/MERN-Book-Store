export default function CheckInputValues(inputValues) {
  // Regex
  const regexTestTitle = (input) => {
    let regex = /[\S\s]/
    return regex.test(input)
  }
  const regexTestAuthor = (input) => {
    let regex = /[\S\s]/
    return regex.test(input)
  }

  // Errors object
  let errors = {}
  if (regexTestTitle(inputValues.title) === false) {
    errors.title = "Book's title can't be empty"
  }
  if (regexTestAuthor(inputValues.author) === false) {
    errors.author = "Book's author can't be empty"
  }

  if (inputValues.publishYear.length === 0 || inputValues.publishYear <= 0) {
    errors.publishYear = "Publish year can't be empty or < 0"
  }
  return errors
}
