//NOT QUITE SURE IF THIS WORKS
 //import axios from "axios";

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
learner.textContent = `${fullName}`;
learnerEmail.textContent = `${email}`
mentorsHeader.textContent = 'Mentors'

//ADDING CLASSES HERE
card.classList.add("card") 
// will need a click event listener that changes the class from "card" to "class selected" and takes id away when class is "card"
mentorsHeader.classList.add("closed") 
// //will need a click event listener that changes class from "closed" to "open" that reveals the mentors

//APPENDING CHILDREN HERE
card.appendChild(learner)
card.appendChild(learnerEmail)
card.appendChild(mentorsHeader)
card.appendChild(unorderedList)
entryPoint.appendChild(card)

// //ADDING INTERATIVITY WITH CLICK EVENTS
card.addEventListener('click', () => {

});

//CONSOLE.LOGS
//console.log(card)
//console.log(mentors)

//ALWAYS RETURN
return card;
}

const baseUrl = "http://localhost:3003/api"

//make the call to the api to get learner id fullName and email
axios.get(`${baseUrl}/learners`)
.then(res => {
  res.data.forEach(obj => {
    //const mentorNums = obj.mentors   idea to put the numbers from EPA to push into a function to retrieve mentors from EPB
    //mentorNumsToUl(mentorNums)       calling the function 
    console.log(obj.mentors)
    LearnerCardMaker(obj)
    mentorNumsToUl(obj.mentors)
  })
})
.catch(err => {
console.error(err);
})
.finally(() => console.log("endpoint A"))

//used for making the mentor list using create the li element then card.appendChild(unorderedList)
function mentorNumsToUl (mentors){ //not sure if i need to use a function to pull numbers from EPA to EPB
axios.get(`${baseUrl}/mentors`)
.then(res => {
  res.data.forEach(obj => {
    //console.log(mentors) // gets mentors id from EPA
    //console.log(obj.id, obj.firstName, obj.lastName) //able to get mentors names and id EPB
  })
  //const li = document.createElement('li')
  //unorderedList.appendChild(li)
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
