function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here

  const widgets = document.querySelectorAll("section>div")
  widgets.forEach((widget, idx) => {
    widget.classList.add("widget")
    widget.setAttribute("tabindex", idx + 1)
  })

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIdx = Math.floor(Math.random() * quotes.length) //creates a random number 
  const randomQuote = quotes[randomIdx] //grabs a quote from a list with the random number
  const quote = document.createElement("div") //creates a div for the quote
  const quoteText = randomQuote.quote // assigns the quote to a variable
  quote.textContent = quoteText //adds the text content to the div
  const widget1 = document.querySelector('.quoteoftheday') // 
  widget1.appendChild(quote) //appneds the changes to the screen
  const authorDate = document.createElement("div")
  const {author, date} = randomQuote
  authorDate.textContent= `${author} in ${date || "an unknown date"}`
  widget1.appendChild(authorDate)
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  randomNouns1 = nouns[Math.floor(Math.random() * nouns.length)]
  randomNouns2 = nouns[Math.floor(Math.random() * nouns.length)]
  randomVerbs1 = verbs[Math.floor(Math.random() * verbs.length)]
  randomVerbs2 = verbs[Math.floor(Math.random() * verbs.length)]
  randomAdverbs1 = adverbs[Math.floor(Math.random() * adverbs.length)]
  randomAdverbs2 = adverbs[Math.floor(Math.random() * adverbs.length)]

  const wording = `We need to ${randomVerbs1} our ${randomNouns1} ${randomAdverbs1} in order to ${randomVerbs2} our ${randomNouns2} ${randomAdverbs2}.`
  const paragraph = document.createElement("p")
  paragraph.textContent = wording
  document.querySelector(".corporatespeak").appendChild(paragraph)
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  let number = 5
  const countdownWidget = document.querySelector(".countdown")
  const countdown = document.createElement("p")
  countdown.textContent = `T-minus ${number}...`
  countdownWidget.appendChild(countdown)
  const id = setInterval(() => {
    if(number === 1) {
      countdown.textContent = "Liftoff! 🚀"
    }else {
      number--
      countdown.textContent = `T-minus ${number}...`
    }
  }, 1000)
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const friendWidget = document.querySelector(".friends")
  const friendParagraph = document.createElement("p")
  friendWidget.appendChild(friendParagraph)
  let randomNumber = Math.floor(Math.random() * people.length)
  let randomPerson = people[randomNumber]
  let year = randomPerson.dateOfBirth.split("-")[0]
  let sentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${year} and `
  if(randomPerson.friends.length === 0){
    sentence += "has no friends."
  }else{
    sentence += `is friends with `
    for(let idx = 0; idx < randomPerson.friends.length; idx++){
      const friendId = randomPerson.friends[idx]
      const friend = people.find(p => p.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`
      let isLastIndex = idx === randomPerson.friends.length - 1
      let isNextToLast = idx === randomPerson.friends.length - 2
      if(isLastIndex){
        sentence += `${fullName}.`
      }else if (isNextToLast){
        sentence += `${fullName} and `
      }else {
        sentence += `${fullName}, `
      }
    }
  }
  friendParagraph.textContent = sentence

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
