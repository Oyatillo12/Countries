
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
        elItem.className = "w-[350px] shadow-2xl p-1 bg-slate-300 rounded-[30px] flex flex-col items-center"
        elItem.innerHTML = `
            <img class="mb-[14px] h-[200px] w-full object-cover rounded-[30px]" src="${item.flag}" alt="Country" >
            <div class="text-center w-full rounded-[30px] bg-slate-100 p-4 shadow-xl">
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
                    <button href-"/" class="flex px-2 justify-between items-center w-[120px] h-[40px] rounded-[10px] bg-blue-200 text-black text-[15px] font-medium">
                       Read More
                        <img src="./images/arrow.svg" width="25" height="25">
                    </button>
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
        let filteredArr = countrys.filter(item =>item.name.toLocaleLowerCase().includes(value) || item.capital.toLocaleLowerCase().includes(value))
        renderUsers(filteredArr)
})


let elSelect = document.querySelector(".select-name")
function selectName(array){
    array.map(item => {
        let elOption = document.createElement("option")
        elOption.textContent = item.name

        elSelect.appendChild(elOption)
    })
}
selectName(countrys)


