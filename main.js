let Change_Img = document.getElementById("change_img");
let all_img = document.querySelectorAll(".sec_2 div img");

if(window.localStorage.getItem("color")){
    //add color to img
    document.body.style.backgroundColor = window.localStorage.getItem("color");
    Change_Img.src = window.localStorage.getItem("image_src");
}


all_img.forEach((e)=>{
    e.addEventListener('click', (ele)=>{

        //add active class to current element
        ele.currentTarget.classList.add("active");
        //add current color to local storage
        window.localStorage.setItem("color", ele.currentTarget.dataset.color);
        window.localStorage.setItem("image_src", ele.currentTarget.src);

        //change body color
        document.body.style.backgroundColor = ele.currentTarget.dataset.color
        Change_Img.src = ele.currentTarget.src;
    });
})

