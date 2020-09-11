# Gear Up

An app for finding recommended packing list for outdoor adventures!

# Table Of Contents 
- [Description](https://github.com/sbrook13/packlist-frontend#description)
- [How It Works (gifs)](https://github.com/sbrook13/packlist-frontend#howitworks)
- [Example Code](https://github.com/sbrook13/packlist-frontend#example-code)
- [Technology Used](https://github.com/sbrook13/packlist-frontend#technology-used)
- [Setting up for the Application](https://github.com/sbrook13/packlist-frontend#setting-up-for-the-application)
- [Main Features](https://github.com/sbrook13/packlist-frontend#main-features)
- [Features in Progress](https://github.com/sbrook13/packlist-frontend#features-in-progress)
- [Contact Information](https://github.com/sbrook13/packlist-frontend#contact-information)
- [Link to Backend Repo](https://github.com/sbrook13/packlist-frontend#link-to-backend-repo)

## Description

Gear up is a web application that allows the user to register and then browse through different outdoor activities. While browsing these activites the user is able to select and modify a recommended packing list for the specific activity they are doing. After selecting a packing list the user can go to their profile page and see their saved list and make changes to their saved packs. 

## How It Works

### Create New User or Login


![Login](https://media.giphy.com/media/hX7pcFkSSHwT9nsObT/giphy.gif)


### Start With Some Standard Packing Lists


![Home Page](https://media.giphy.com/media/Q99AHMSoxXrwadb6Yb/giphy.gif)

### Create a New Pack

![New List](https://media.giphy.com/media/ZF9KU0qiw74lYTBbOi/giphy.gif)


### View Your Profile and All Your Packs


![Profile](https://media.giphy.com/media/lQIVg9DUVMQRHO2PJY/giphy.gif)


### Remove An Item from Pack


![Delete Item](https://media.giphy.com/media/hSdgAjIioAIpUZGjd7/giphy.gif)


### Remove Entire Packing List


![Remove Pack](https://media.giphy.com/media/cKcUuYtxSpSepXTEI9/giphy.gif)

### Sign Out


![SignOut](https://media.giphy.com/media/J3FoUUkjwaC06gMAhg/giphy.gif)



## Example Code 

```
    const categories = new Set()
        activity.gears.forEach(gear =>{
            categories.add(gear.category)
        })

    categories.forEach(category =>{
        const categoryCard = document.createElement('div')
        const subtitle = document.createElement('h3')

        categoryCard.id = category.toLowerCase()
        categoryCard.classList.add('category-card')
        subtitle.textContent = category.toUpperCase()

        categoryCard.append(subtitle)
        packingList.append(categoryCard)
        })
```
```
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
```    

## Technology Used

- Javascript
- HTML
- CSS
- Anime.js

## Setting up for the application

To start the server run

``` 
    lite-server 
```

## Main Features

- User can register/sign in
- User can find a recommended packing list for an outdoor activity
- User can save this packing list to their profile then view later, update items and delete that packing list. 

## Features in Progress

- Allowing users to add individual items to saved packing list. 

## Contact Information

Created by [Shelley Brook](https://www.linkedin.com/in/sbrook13/) and [Kyle Trahan](https://www.linkedin.com/in/kyle-trahan-8384678b/)

## Link to Backend Repo

https://github.com/ktrahan2/packlist-backend
