
let elList = document.querySelector(".list")
let modalInner = document.querySelector("#modal-inner")
let modalOuter = document.querySelector("#modal-outer")

const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg",
        isLIKed:false,
        isSaved: false
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg",
        isLIKed:false ,
        isSaved: false
    }
]

let LikeCount = document.querySelector(".like-count")
let saveCount = document.querySelector(".save-count")


function renderUsers(arr){
    elList.innerHTML = null

    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.className = "dark-item lg:w-[350px] md:w-[270px] shadow-2xl p-1 bg-slate-300 rounded-[30px] flex flex-col items-center"
        elItem.innerHTML = `
            <img class="mb-[14px] h-[200px] w-full object-cover rounded-[30px]" src="${item.flag}" alt="Country" >
            <div class="item-content text-center w-full rounded-[30px] bg-slate-100 p-4 shadow-xl">
                <p class="font-bold text-2xl "> ${item.name}</p>
                <p class="text-lg">Capital of city <i class="text-lg font-semibold">"${item.capital}"</i> </p>
                <p class="mb-[25px] text-lg">Populaion <i class="font-semibold">"${item.population}"</i></p>
                <div class="flex items-center gap-3">
                    <button onclick="clickLikedBtn(${item.id})" class="${item.isLIKed ? "text-red-500" : "text-slate-600"} flex justify-center items-center items-center w-[40px] h-[40px] rounded-[10px] bg-blue-200">
                       <svg class="w-[80%]" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="currentColor" d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242z"></path></g></svg>
                    </button>
                    <button onclick="clickSavedBtn(${item.id})" class=" ${item.isSaved ? "text-yellow-500" : "text-slate-600"} flex justify-center items-center w-[40px] h-[40px] rounded-[10px] bg-blue-200">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0309 3.30271C13.0299 2.8991 10.9701 2.8991 8.96913 3.30271C6.66186 3.76809 5 5.82231 5 8.20894V18.6292C5 20.4579 6.9567 21.596 8.51221 20.6721L11.3451 18.9895C11.7496 18.7492 12.2504 18.7492 12.6549 18.9895L15.4878 20.6721C17.0433 21.596 19 20.4579 19 18.6292V8.20894C19 5.82231 17.3381 3.76809 15.0309 3.30271Z" fill="currentColor"></path> </g></svg>
                    </button>
                    <button onclick="clickedBtnMore(${item.id})" id="read-more"  class="flex hover:opacity-70 duration-[0.4s] border-[2px] border-blue-200 px-2 justify-between items-center w-[120px] h-[40px] rounded-[10px] bg-blue-200 text-black text-[15px] font-medium">
                       Read More
                        <img src="./images/arrow.svg" width="25" height="25">
                    </button>
                </div>
            </div>

        `
        elList.appendChild(elItem) 
    })
    LikeCount.textContent = arr.filter(item => item.isLIKed == true).length
    saveCount.textContent = arr.filter(item => item.isSaved == true).length
}

renderUsers(countrys)
function clickedBtnMore(id){
    let findedArray = countrys.find(country => country.id == id)
    modalInner.innerHTML = `
        <img class="mb-[14px] h-[300px] w-full object-cover rounded-[30px]" src="${findedArray.flag}" alt="Country" >
        <div class="dark-content text-center w-full rounded-[30px] bg-slate-300 p-4 shadow-xl">
            <p class="font-bold text-[46px] "> ${findedArray.name}</p>
            <p class="text-[36px]">Capital of city <i class="text-[36px] font-semibold">"${findedArray.capital}"</i> </p>
            <p class="text-[36px]">Populaion <i class="font-semibold">"${findedArray.population}"</i></p>
        </div>
    `
    modalOuter.classList.remove("hidden")
    document.body.classList.add("overflow-hidden")
}



function clickLikedBtn(id){
  const findedArray = countrys.find(item => item.id == id)  
    findedArray.isLIKed = !findedArray.isLIKed
    
    renderUsers(countrys)
}

function clickSavedBtn(id){
    const findedArray = countrys.find(item => item.id == id) 
    findedArray.isSaved = !findedArray.isSaved
    
    renderUsers(countrys)
}
 function countedLikesBtn(){
    const filteredArr = countrys.filter(item => item.isLIKed == true)
    if(filteredArr.length == 0){
        elList.innerHTML = `
        <li class="mx-auto"><p class=" text-[28px] text-center">You don't have any liked</p></li>
        `
    }
    else{
        renderUsers(filteredArr)
    }
 }
 function countedSavesBtn(){
    const filteredArr = countrys.filter(item => item.isSaved == true)
    if(filteredArr.length == 0){
        elList.innerHTML = `
        <li class="mx-auto mb-[30px]"><p class=" text-[28px] text-center">You don't have any saved</p></li>
        `
    }
    else{
        renderUsers(filteredArr)
    } 
}

let elInput = document.querySelector(".input-search")

elInput.addEventListener("keyup",function(evt){
    let value = evt.target.value.toLowerCase()
        let filteredArr = countrys.filter(item => {
            if(!isNaN(value)){
                return item.population.toString().includes(value)
            }
            else{
                return item.name.toLocaleLowerCase().includes(value) || item.capital.toLocaleLowerCase().includes(value)
            }
        })
        renderUsers(filteredArr)
})


let elSelect = document.querySelector(".select-name")
function selectName(countrys){
    countrys.map(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item.name
        elOption.value = item.name
        elSelect.appendChild(elOption)
       
    })
}
selectName(countrys)

 elSelect.addEventListener("click", function(){
    let selected = elSelect.value
    if(selected === "all"){
        renderUsers(countrys);
    }
     else{
        let found = countrys.filter(item => item.name == selected)
    renderUsers(found);
    }
})

modalOuter.addEventListener("click", function(evt){
    if(evt.target.id == "modal-outer"){
        modalOuter.classList.add("hidden")
        document.body.classList.remove("overflow-hidden")
    }
})

function closebtn(){
    modalOuter.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
}




let body = document.querySelector("body")
let elModeDark = document.querySelector("#mode-dark")
let elmodeLight = document.querySelector("#mode-light")

elModeDark.addEventListener("click", function(){
    body.classList.add("dark_mode")
    elModeDark.style.display = "none"
    elmodeLight.style.display = "flex"
})
elmodeLight.addEventListener("click", function(){
    body.classList.remove("dark_mode")
    elModeDark.style.display = "flex"
    elmodeLight.style.display = "none"
})

