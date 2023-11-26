let socialLinks = document.querySelectorAll(".socials a")
let inputGroup = document.querySelector(".input-group")
let inputField = document.getElementById("input-field")
let copy = document.getElementById("copy-btn")

socialLinks.forEach((e)=>{
    e.addEventListener("click",()=>{
        socialLinks.forEach((ele)=>{
            e.classList.add("active");
            ele.classList.remove("active");
            let link = e.dataset.link;
            inputField.setAttribute("value",link)
        })
    })
})
copy.addEventListener("click",()=>{
    inputField.select();
    navigator.clipboard.writeText(inputField.value);
})