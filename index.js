function takeANumber(deliLine) {
  
  deliLine.push(deliLine.length + 1);
  
  return `Welcome. You are number ${(deliLine.length)} in line.`;
}

function nowServing(katzLine) {
  if (katzLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  let currentPerson = katzLine.shift();
  return `Currently serving number ${currentPerson}.`;
  
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  
  return `The line is currently: ${line.length}`;
} 