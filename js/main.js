
let elList = document.querySelector(".list")

const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
    }
]

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
                    <button class="flex justify-center items-center items-center w-[40px] h-[40px] rounded-[10px] bg-blue-200">
                        <img src="./images/heartsm.svg" alt="heart" width="80%" >
                    </button>
                    <button class="flex justify-center items-center w-[40px] h-[40px] rounded-[10px] bg-blue-200">
                        <img src="./images/save2.svg" alt="heart" width="100%" >
                    </button>
                    <button id="read-more"  class="flex hover:opacity-70 duration-[0.4s] border-[2px] border-blue-200 px-2 justify-between items-center w-[120px] h-[40px] rounded-[10px] bg-blue-200 text-black text-[15px] font-medium">
                       Read More
                        <img src="./images/arrow.svg" width="25" height="25">
                    </button>
                </div>
            </div>

        <div id="modal-outer" class=" hidden fixed backdrop-blur-sm inset-0 m-auto">
            <div id="Modal-inner" class="dark-modal w-[50%] rounded-[30px] p-3 bg-white inset-0 m-auto shadow-2xl">
            <button id="close" class="ml-[92%] pb-[9px]" >               
                <svg class="w-[45px] h-[45px]" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
                <img class="mb-[14px] h-[350px] w-full object-cover rounded-[30px]" src="${item.flag}" alt="Country" >
                <div class="dark-content text-center w-full rounded-[30px] bg-slate-300 p-4 shadow-xl">
                    <p class="font-bold text-2xl "> ${item.name}</p>
                    <p class="text-2xl">Capital of city <i class="text-2xl font-semibold">"${item.capital}"</i> </p>
                    <p class="mb-[25px] text-2xl">Populaion <i class="font-semibold">"${item.population}"</i></p>
                    <div class="flex items-center justify-center gap-3">
                        <button class="flex justify-center items-center items-center w-[70px] h-[50px] rounded-[10px] bg-blue-200">
                            <img src="./images/heartsm.svg" alt="heart" width="80%" >
                        </button>
                        <button class="flex justify-center items-center w-[70px] h-[50px] rounded-[10px] bg-blue-200">
                            <img src="./images/save2.svg" alt="heart" width="100%" >
                        </button>
                    </div>
                </div>
            </div>
            </div>
        `
        elList.appendChild(elItem) 
    })
}
renderUsers(countrys)

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
        let found = countrys.find(item => item.name == selected)
    renderUsers([found]);
    }
})







function toggleModal(modal, show) {
    if (modal) {
        modal.style.display = show ? "flex" : "none";
        document.body.style.overflow = show ? "hidden" : ""; // Body scrollni boshqarish
    }
}


function attachListeners(){
    let readMore = document.querySelectorAll("#read-more");

    readMore.forEach(item => {
        item.addEventListener("click", function() {
            let parent = item.closest("li") 
            let modal = parent ? parent.querySelector("#modal-outer") : null;
            toggleModal(modal, true)
        });
    });

    let elClose = document.querySelectorAll("#close")

    elClose.forEach(item => {
        item.addEventListener("click", function(){
            let modal = item.closest("#modal-outer")
            toggleModal(modal, false)
        })
    })
}
function observeDomChanges() {
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
}
observeDomChanges() 
attachListeners()

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

