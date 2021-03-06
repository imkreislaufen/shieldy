import { Equation } from '@models/Chat'

export function generateEquation() {
  const questions = ["Welche Farbe hat Pikachu", "Wieviele verschiedene Pokémon-Arten gibt es in der ersten Generation?", "Was ist Sinas Lieblingsfarbe?"]
  const answers = ["gelb", "151", "pink"]
  const rnd = getRandomInt(questions.length)
  const a = questions[rnd]
  const b = answers[rnd]
  return {
    question: `${a}`,
    answer: `${b}`,
  } as Equation
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
