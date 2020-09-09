

fetch('http://localhost:3500/activities')
    .then(response => response.json())
    .then(activities => {
        const activitySection = document.querySelector('#activity-section')
        activities.forEach(activity=> {
            const activityCard = document.createElement('div')
            const header = document.createElement('h2')
            const image = document.createElement('a')

            console.log(activity)

            activityCard.classList.add('activity-card')
            header.innerHTML = `<a class="activity-header" href="activity.html?id=${activity.id}">${activity.name}</a>`
            // image.innerHTML = `<a href="activity.html?id=${activity.id}"><img src=${activity.image}></a>`
            activityCard.style.backgroundImage = `url('${activity.image}')`
            activityCard.append(header, image)
            activitySection.append(activityCard)
        })
    })

//functions for pyramid movement
    anime({
        targets: 'div.middle',
        translateY: [
            {value: 110, duration: 1000},
        
        ],
        delay: 500
        })

    anime({
        targets: 'div.bottom',
        translateY: [
            {value: 220, duration: 1800},
        ],
        delay: 1100
        })
    
    