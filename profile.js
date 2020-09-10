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

            console.log(activity)
            activityCard.classList.add('activity-card')
            header.innerHTML = `<a href="activity.html?user_id=${user_id}&activity_id=${activity.id}">${activity.name}</a>`
            activityCard.style.backgroundImage = `url("${activity.image}")`

            activityCard.append(header)
            activitySection.append(activityCard)
        })
    })

fetch('http://localhost:3500/user_packs')
    .then(response => response.json())
    .then(packedBags => {
        const bags = document.querySelector('#packed-bags')

        const listNames = new Set()
        packedBags.forEach(packedBag =>{
            listNames.add(packedBag.list_name) 
        })
       
        listNames.forEach(name =>{
            const listCard = document.createElement('div')
            const subtitle = document.createElement('h3')
             

            listCard.id = name.toLowerCase()
            listCard.classList.add('list-card')
            subtitle.textContent = name
            listCard.append(subtitle)

            bags.append(listCard)
        })

        packedBags.forEach(packedBag => {
            const bagCard = document.querySelector(`#${packedBag.list_name.toLowerCase()}`)
            const gearItem =  document.createElement('p')
        
            gearItem.classList.add('gear-bullet')
            gearItem.innerHTML = `${packedBag.gear.name}`  
 
            
            bagCard.append(gearItem)
 
         })
        
    })