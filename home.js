const secondParams = new URLSearchParams(window.location.search)
const user_id = secondParams.get('user_id')

    
const profileButton = document.querySelector('#profile-button')
const input = document.createElement('input')
    input.type = "hidden"
    input.name = "user_id"
    input.value = user_id
  
    profileButton.prepend(input)


fetch('http://localhost:3500/activities')
.then(response => response.json())
.then(activities => {
    const activitySection = document.querySelector('#cards-section')
    activities.forEach(activity => {
        const activityCard = document.createElement('div')
        const header = document.createElement('h2')


        activityCard.classList.add('display-card')
        header.innerHTML = `<a class="activity-header" href="activity.html?user_id=${user_id}&activity_id=${activity.id}">${activity.name}</a>`
        activityCard.style.backgroundImage = `url('${activity.image}')`
        activityCard.append(header)
        activitySection.append(activityCard)
    })
})


//functions for pyramid movement
anime({
    targets: 'div.middle',
    translateY: [
        {value: 110, duration: 1700},
    ],
    delay: 500
    })

anime({
    targets: 'div.bottom',
    translateY: [
        {value: 220, duration: 3300},
    ],
    delay: 1200
  
    })