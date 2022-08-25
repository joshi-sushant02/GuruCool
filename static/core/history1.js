var Assigenments=
[
    ["JavaScript Fundamentals","Poonam Nikam","Assignment-1","DOM & HTML","Due Date- 5 May 2022","Submitted on - 5 June 2022 ✔","#FFBD33"] ,
    // ["JavaScript Fundamentals","Poonam Nikam","Assignment-1","Callbacks & Closures","Due Date- 25 May 2022","Submitted on - 20 May 2022 ✔","#FF7E62"] ,
    // ["JavaScript Fundamentals","Poonam Nikam","Assignment-1","Callbacks & Closures","Due Date- 25 May 2022","Submitted on - 20 May 2022 ✔","#62FFCC"] ,
    // ["JavaScript Fundamentals","Poonam Nikam","Assignment-1","Callbacks & Closures","Due Date- 25 May 2022","Submitted on - 20 May 2022 ✔","#94FF62"] ,
    ["Django Fundamentals","Madhuri Joshi","Assignment-2","Passing Data & Callbacks","Due Date- 25 June 2022","Submitted on - 25 May 2022 ✔","#2A265F"] 
]

 var ul= document.getElementById("list");
 var button= document.getElementById("btn2");
 Assigenments.forEach(function(each){
    const externalHTML = `
    <div class="courses-container">
    <div class="course">
        <div class="course-preview" style="background-color: ${each[6]};">
            <h6>Subject</h6>
            <h2>${each[0]}</h2>
            <a href="#">${each[1]} <i class="fas fa-chevron-right"></i></a>
        </div>
        <div class="course-info">
            <div class="progress-container">
                <div class="progress"></div>
                <style>
                    .progress::after {
                                background-color: ${each[6]};
                            }</style>
                <span class="progress-text">
                    8/10 Points
                </span>
            </div>
            <h6>${each[2]}</h6>
            <h2>${each[3]}</h2>
           <!--<h6><i>${each[4]}</i></h6>-->
            <h5 style="color: #2A265F;"><b>${each[5]}</b></h5>
            <button class="btn" style="background-color: ${each[6]};">View</button>
        </div>
    </div>
</div>
`;
        var li= document.createElement('li');
        li.innerHTML=externalHTML;
        ul.append(li);
        
})
 button.addEventListener("click",function(){
    
 })