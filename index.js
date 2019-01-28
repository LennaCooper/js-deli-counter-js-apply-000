function takeANumber(line , name ) {
  line.push(name)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
  var firstPerson = katzDeliLine.shift()
  return (`Currently serving ${firstPerson}.`)
    } else {
      return ("There is nobody waiting to be served!")
    }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineString = []
    for (let i = 0; i < line.length; i++) {
      lineString.push(" " + (i + 1) + `. ${line[i]}`) 
    }
  } else {
    return ("The line is currently empty.")
  }
  return 'The line is currently:' + lineString.toString()
}
  