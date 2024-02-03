//NOT QUITE SURE IF THIS WORKS
 //import axios from "axios";

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇



  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  
const entryPoint = document.querySelector(".cards"); //not sure if this will be used

/*whole card needs class of card. card selected*/
function LearnerCardMaker({id, fullName, email, mentors}){



//CREATING ELEMENTS HERE
const card = document.createElement("div") 
const learner = document.createElement("h3")
const learnerEmail = document.createElement("div")
const mentorsHeader = document.createElement("h4")
//FIGURE OUT HOW TO MAKE A UL WITH LI CONTENT
const unorderedList = document.createElement("ul")
//const mentorList = document.createElement("li")



//ADDING TEXT CONTENT HERE
learner.textContent = `${fullName}, ID ${id}`;
learner.src = fullName, id
learnerEmail.textContent = `${email}`
learnerEmail.src = email
mentorsHeader.textContent = 'Mentors'
//FIGURE OUT WHAT TO APPEND TO MAKE A UL WITH A LI CONTENT
unorderedList.textContent = `${mentors}`
//mentorList.textContent = "wip" 
//FIGURE OUT HOW TO PLACE ARROW NEXT TO "MENTORS H4" AND ADD A CLICK FUNTION CHANGING CLASS FROM "closed" TO "open"



//ADDING CLASSES HERE
card.classList.add("card") 
// will need a click event listener that changes the class from "card" to "class selected" and takes id away when class is "card"
mentorsHeader.classList.add("closed") 
//will need a click event listener that changes class from "closed" to "open" that reveals the mentors


//WILL I NEED TO ADD A .SRC TO SOME OF THE VARIABLES??


//ADDING INTERATIVITY WITH CLICK EVENTS
card.addEventListener("click", () => {
  card.classList.toggle("card", "card selected")
})
mentorsHeader.addEventListener("click", () => {
  mentorsHeader.classList.toggle("closed", "open")
})


//NEED TO MAKE A FUNCTION WITH FOREACH METHOD ADDING MENTORLIST.TEXTCONTENT LI TO THE UL



//APPENDING CHILDREN HERE
card.appendChild(learner)
card.appendChild(learnerEmail)
card.appendChild(mentorsHeader)
//card.appendChild(mentorList)


//CONSOLE.LOGS
console.log(card)


//ALWAYS RETURN
return card;
}

//THE TESTING CALL FOR EVERYTHING NEEDED FROM API ENDPOIN A (ALSO NEEDING MENTORS IDS)
//LearnerCardMaker({ id: 7, fullName: "Tanner Underhill", email: 'tannerunderhill@gmail.com', mentors: [17, 18] })





//make the call to the api to get learner id fullName and email
axios.get("http://localhost:3003/api/learners")
.then(res => {
  //console.log(res.data);
  const card = LearnerCardMaker({id: res.data.id, fullName: res.data.fullName, email: res.data.email, mentors: res.data.mentors})
  entryPoint.appendChild(card)
})
.catch(err => {
console.error(err);
})
.finally(() => console.log("finally"))
//there will be mentors ids given from endpoint a that you will then have to use to 
//input into endpoint b to recieve what mentors will be used in the ul


  

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
