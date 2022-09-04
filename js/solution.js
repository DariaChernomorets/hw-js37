(function () {
    'use strict'

    const list = document.getElementById('ulId');
    console.log(list)

    const attributes = list.attributes

    const atrValueArray = [];

    for (let elem of attributes){

        let atrValue = elem.value
        atrValueArray.push(atrValue)
    }

    console.log(atrValueArray)

    const atrNameArray = [];

    for (let elem of attributes){

        let atrValue = elem.name
        atrNameArray.push(atrValue)
    }

    console.log(atrNameArray)

    const lastLi = document.querySelector('li:last-child');
    lastLi.innerHTML = "Привет меня зовут Даша"

    const firstLi = document.querySelector('li:first-child');
    firstLi.setAttribute('data-my-name', 'Даша');
    console.log(firstLi)

    list.removeAttribute('data-dog-tail')
})()

