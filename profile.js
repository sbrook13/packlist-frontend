const queryParams = new URLSearchParams(window.location.search)
const user_id = queryParams.get('user_id')

const profileHeader = document.querySelector('#profile-header')

fetch(`http://localhost:3500/users/${user_id}`)
    .then(response => response.json())
    .then(user => {
        console.log(user)
        const h1 = document.createElement('h1')

        h1.textContent = `${user.name}'s Packing Lists`

        profileHeader.append(h1)
    })

fetch('http://localhost:3500/activities')
    .then(response => response.json())
    .then(activities => {
        const activitySection = document.querySelector('#activity-section')
        activities.forEach(activity=> {
            const activityCard = document.createElement('div')
            const header = document.createElement('h3')
            const image = document.createElement('img')

            console.log(activity)

            header.innerHTML = `<a href="activity.html?user_id=${user_id}&activity_id=${activity.id}">${activity.name}</a>`
            activityCard.style.backgroundImage = `url("${activity.image}")`

            activityCard.append(header)
            activitySection.append(activityCard)
        })
    })