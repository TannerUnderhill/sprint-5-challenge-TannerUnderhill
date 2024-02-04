async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  
const entryPoint = document.querySelector(".cards");

function LearnerCardMaker({id, fullName, email, mentors }){

//CREATING ELEMENTS HERE
const card = document.createElement("div") 
const learner = document.createElement("h3")
const learnerEmail = document.createElement("div")
const mentorsHeader = document.createElement("h4")
const unorderedList = document.createElement("ul")

//ADDING TEXT CONTENT HERE
learner.textContent = `${fullName}` //when card has both classes of "card" and "selected" needs to show the following `${fullName}, ID ${learnerId}`
learnerEmail.textContent = `${email}`
mentorsHeader.textContent = 'Mentors'
//!!HEADER => P FUNCTIONALITY FOR WHEN WAITING ON API INFO AND THEN WHEN A LEARNER CARD IS SELECTED!!//
//I need to make a funtion when waiting on api to load information header=>p should state "Fetching learner cards..."
//when api has recieved all info header=>p should state "No learner is selected"
//when api has recieved all info and a learner card has the classes of "card" and "selected" header=>p should state `The selected learner is ${learnerfullName}`

//APPENDING CHILDREN HERE
card.appendChild(learner)
card.appendChild(learnerEmail)
card.appendChild(mentorsHeader)
card.appendChild(unorderedList)
entryPoint.appendChild(card)


//ADDING CLASSES HERE
card.classList.add("card") 
mentorsHeader.classList.add("closed") 
// //will need a click event listener that changes class from "closed" to "open" that reveals the mentors


// //ADDING INTERATIVITY WITH CLICK EVENTS
card.addEventListener("click", () => {
  if(card.classList.contains("selected")){
    card.classList.remove("selected")
  } else {
    document.querySelectorAll(".card").forEach(card => {
      card.classList.remove("selected")
    })
    card.classList.add("selected")
  }
})

//this is wrong. how do I toggle between two classes "open" and "closed"
unorderedList.addEventListener("click", () => {
  if (unorderedList.classList.contains("closed")) {
    unorderedList.classList.remove("closed")
    unorderedList.classList.add("open")
  } else {
    unorderedList.classList.remove("open")
    unorderedList.classList.add("closed")
  }
})

//CONSOLE.LOGS
//console.log(card)

//ALWAYS RETURN
return card;
}

const baseUrl = "http://localhost:3003/api"

//make the call to the api to get learner id fullName and email
axios.get(`${baseUrl}/learners`)
.then(res => {
  res.data.forEach(obj => {
    //obj.mentors gets me the Learners mentors IDs
    //console.log(obj) gets me the whole api info for the learners (learner id, learner fullName, learner email, array of learners mentor IDs)
    LearnerCardMaker(obj)
    mentorNumsToUl(obj.mentors) //pushing mentor ids to the mentorNumsToUl function to hopefully use the mentor numbers to pull exact mentor names to append learner cards ul
  })
})
.catch(err => {
console.error(err);
})
.finally(() => console.log("endpoint A"))

//queestion is how do I pull mentor ids from EPA to retrieve the proper names from EPB to create li and append to proper learner cards
//used for making the mentor list using create the li element then card.appendChild(unorderedList)
function mentorNumsToUl (mentors){ //not sure if i need to use a function to pull numbers from EPA to EPB
axios.get(`${baseUrl}/mentors`)
.then(res => {
  res.data.forEach(obj => {
    //console.log(mentors) // gets mentors ids from EPA
    //console.log(obj.id, obj.firstName, obj.lastName) //gets mentors names and id EPB
  })
  //here is where I need to create the li element and append it to the correct learner card
})
.catch(err => {
console.error(err);
})
.finally(() => console.log("endpoint B"))
}

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
