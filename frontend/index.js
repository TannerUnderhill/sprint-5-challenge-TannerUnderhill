//const { default: axios } = require("axios");

//const { M } = require("msw/lib/glossary-de6278a9");

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY 2023`
  
const entryPoint = document.querySelector(".cards");

function LearnerCardMaker(learnerinfo){
let {fullName, email, id, mentors} = learnerinfo
//CREATING ELEMENTS HERE
const card = document.createElement("div") 
const learner = document.createElement("h3")
const learnerEmail = document.createElement("div")
const mentorsHeader = document.createElement("h4")
const unorderedList = document.createElement("ul")

//ADDING TEXT CONTENT HERE
learner.textContent = `${fullName}` 
const headerP = document.querySelector(".info")
headerP.textContent = "No learner is selected"
learnerEmail.textContent = `${email}`
mentorsHeader.textContent = 'Mentors'

//APPENDING CHILDREN HERE
card.appendChild(learner)
card.appendChild(learnerEmail)
card.appendChild(mentorsHeader)
card.appendChild(unorderedList)
entryPoint.appendChild(card)

//ADDING CLASSES HERE
card.classList.add("card") 
mentorsHeader.classList.add("closed") 

//ADDING A MENTOR LI FUNTION TO ADD MENTORS NAMES TO UL
mentors.forEach(mentor => {
  const listItem = document.createElement("li")
  listItem.textContent = mentor
  unorderedList.appendChild(listItem)
})

// //ADDING INTERATIVITY WITH CLICK EVENTS
card.addEventListener("click", () => {

mentorsHeader.addEventListener("click", () => {
  mentorsHeader.classList.toggle("closed")
  mentorsHeader.classList.toggle("open")
})

  if(!card.classList.contains("selected")){
    document.querySelectorAll(".card").forEach(card => {
      card.classList.remove("selected")
    })
    card.classList.add("selected")
    learner.textContent = `${fullName}, ID ${id}`
    headerP.textContent = `The selected learner is ${fullName}`
  } else {
    card.classList.remove("selected")
    learner.textContent = `${fullName}`
    headerP.textContent = 'No learner is selected'
  }
})

//WOP MAKE SURE THE MENTORS UL DROP DOWN WORKS


//CONSOLE.LOGS


//ALWAYS RETURN
return card;
}

const baseUrl = "http://localhost:3003/api"

async function epaInfo() {
  try {
    let EPA = await axios.get(`${baseUrl}/learners`)
    let EPB = await axios.get(`${baseUrl}/mentors`)
    const mentors = EPB.data
    const learners = EPA.data
    learners.forEach(learner => {
      let object = {
        ...learner,
        mentors: learner.mentors.map(id => {
          let compare = mentors.find((mentorid) => mentorid.id === id)
          return `${compare.firstName} ${compare.lastName}`
        })
       }
      LearnerCardMaker(object)
    })
  } catch (err) {
    console.error(err)
  }
}

//CALLING THE API FUNCTION
epaInfo()


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
