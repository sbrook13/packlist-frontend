

fetch('http://localhost:3500/activities')
    .then(response => response.json())
    .then(activities => {
        const activitySection = document.querySelector('#activity-section')
        activities.forEach(activity=> {
            const activityCard = document.createElement('div')
            const header = document.createElement('h2')
            const image = document.createElement('img')

            console.log(activity)

            header.innerHTML = `<a href="activity.html?id=${activity.id}">${activity.name}</a>`
            image.src = activity.image

            activityCard.append(header, image)
            activitySection.append(activityCard)
        })
    })