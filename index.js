

fetch('http://localhost:3500/activities')
    .then(response => response.json())
    .then(activities => {
        const activitySection = document.querySelector('#activity-section')
        activities.forEach(activity=> {
            const activityCard = document.createElement('div')
            const header = document.createElement('h2')

            console.log(activity)

            activityCard.classList.add('activity-card')
            header.innerHTML = `<a class="activity-header" href="activity.html?id=${activity.id}">${activity.name}</a>`
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
    
    