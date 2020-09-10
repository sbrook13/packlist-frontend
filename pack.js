const queryParams = new URLSearchParams(window.location.search)
const user_id = queryParams.get('user_id')

const queryPackParams = new URLSearchParams(window.location.search)
const pack_id = queryPackParams.get('pack_id')

fetch(`http://localhost:3500/packs/${pack_id}`)
    .then(response => response.json())
    .then(pack => {
        const header = document.querySelector('header')
        const title = document.createElement('h1')

        title.textContent = pack.name
        header.append(title)

        const selectedGear = document.querySelector('#selected-gear')

        const categories = new Set()
        activity.gears.forEach(gear =>{
            categories.add(gear.category)
        })

        const categories = new Set()
        pack.gears.forEach(gear => {
            categories.add(gear.category)
        })
       
        categories.forEach(category =>{
            const categoryCard = document.createElement('div')
            const subtitle = document.createElement('h3')

            categoryCard.id = category.toLowerCase()
            categoryCard.classList.add('category-card')
            subtitle.textContent = category
            categoryCard.append(subtitle)

            selectedGear.append(categoryCard)
        })


        pack.gears.forEach(gear => {
            const categoryCard = selectedGear.querySelector(`#${gear.category.toLowerCase()}`)
            const gearItem =  document.createElement('p')
 
            gearItem.classList.add('gear-bullet')
            gearItem.innerHTML = `
            <form method="POST" action="http://localhost:3500/packs/${pack_id}">
            <input type="hidden" name="_method" value="delete">
            <a href="${gear.url}">
            ${gear.name}
            <input type="hidden" name="user_id" value=${user_id}>
            <input type="hidden" name="gear_id" value=${gear.id}>
            <input type="hidden" name="pack_id" value=${pack_id}>
            <input type="submit" value="-"</a>
            </form>
            `  
 
 
            categoryCard.append(gearItem)
 
         })
  
     })