const queryParams = new URLSearchParams(window.location.search)
const user_id = queryParams.get('user_id')

const queryPackParams = new URLSearchParams(window.location.search)
const pack_id = queryPackParams.get('pack_id')

const profileButton = document.querySelector('#profile-button')
const input = document.createElement('input')
    input.type = "hidden"
    input.name = "user_id"
    input.value = user_id
  
    profileButton.prepend(input)

const gearSection = document.querySelector('#gear-section')

fetch(`http://localhost:3500/packs/${pack_id}`)
    .then(response => response.json())
    .then(pack => {
        const header = document.querySelector('header')
        const pageTitle = document.querySelector('title')
        const title = document.createElement('h1')

        title.textContent = pack.name
        pageTitle.textContent = pack.name
        
        header.append(title)
        

    })

fetch(`http://localhost:3500/selected_gears`)
    .then(response => response.json())
    .then(selected_gears => {

        const categories = new Set()
        selected_gears.forEach(selected_gear => {
            if (selected_gear.pack_id == pack_id) {
            categories.add(selected_gear.gear.category)
            }
        })

        categories.forEach(category => {
            const categoryCard = document.createElement('div')
            const subtitle = document.createElement('h3')

            categoryCard.id = category.toLowerCase()
            categoryCard.classList.add('category-card')
            subtitle.textContent = category
            categoryCard.append(subtitle)

            gearSection.append(categoryCard)
        })


        selected_gears.forEach(selected_gear => {
            if (selected_gear.pack_id == pack_id){
                const categoryCard = gearSection.querySelector(`#${selected_gear.gear.category.toLowerCase()}`)
                const gearItem =  document.createElement('p')
                
                gearItem.classList.add('gear-bullet')
                gearItem.innerHTML = `
                <form method="POST" action="http://localhost:3500/selected_gears/${selected_gear.gear_id}">
                <input type="hidden" name="_method" value="delete">
                <a href="${selected_gear.gear.url}">
                ${selected_gear.gear.name}
                <input type="hidden" name="user_id" value=${user_id}>
                <input type="hidden" name="gear_id" value=${selected_gear.gear_id}>
                <input type="hidden" name="pack_id" value=${pack_id}>
                <input type="submit" value="-"</a>
                </form>
                `  
                categoryCard.append(gearItem)
            }
 
         })
  
    })
        
   