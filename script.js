let url = "https://codeforces.com/api/contest.list";
let response = fetch(url);

response.then((v) => {
    return v.json();
}).then((contests) => {
    console.log(contests);
    let ihtml = "";
    let results = contests.result;

    let res =results.slice(0, 15)
    
    for (let item of res) {  
        let startTime = new Date(item.startTimeSeconds * 1000).toLocaleString();
        let duration = (item.durationSeconds / 3600).toFixed(2); 

        ihtml += `
            <div class="card mx-2 my-2" style="width: 22rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Duration: ${duration} hours</p>
            <p class="card-text">Starts at: ${startTime}</p>
            <p class="card-text">Status: ${item.phase}</p>  <!-- Now status is last -->
            <a href="https://codeforces.com/contests" class="btn btn-primary my-4" target="_blank">Visit Contest Page</a>
        </div>
    </div>
        `;
    }

    document.getElementById("cardContainer").innerHTML = ihtml;
});

