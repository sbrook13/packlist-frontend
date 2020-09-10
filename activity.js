
const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('activity_id')

const secondParams = new URLSearchParams(window.location.search)
const user_id = secondParams.get('user_id')

const activityHeader = document.querySelector('#activity-header')
const packingList = document.querySelector('#packing-list')

fetch(`http://localhost:3500/activities/${id}`)
    .then(response => response.json())
    .then(activity => {
        const title = document.createElement('h1')
        const description = document.createElement('p')

        title.textContent = activity.name.toUpperCase()
        description.textContent = activity.description
        activityHeader.style.backgroundImage = `url('${activity.image}')`

        activityHeader.append(title, description) 

        const categories = new Set()
        activity.gears.forEach(gear =>{
            categories.add(gear.category)
        })

        categories.forEach(category =>{
            const categoryCard = document.createElement('div')
            const subtitle = document.createElement('h3')

            categoryCard.id = category.toLowerCase()
            subtitle.textContent = category
            categoryCard.append(subtitle)

            packingList.append(categoryCard)
        })

        activity.gears.forEach(gear => {
           const categoryCard = packingList.querySelector(`#${gear.category.toLowerCase()}`)
           const gearItem =  document.createElement('p')

           gearItem.classList.add('gear-bullet')
           gearItem.innerHTML = `<a href="${gear.url}">
           ${gear.name}
           <input type="hidden" name="user_id" value=${user_id}>
           <input type="hidden" name="gear_id" value=${gear.id} multiple>
           <input type="checkbox" name="gear" checked multiple></a>
           `  


           categoryCard.append(gearItem)

        })
 
    })
