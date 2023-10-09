





let far = []

let gallery = [
    {
        'id':1,
        'name':'iphone 11',
        'src':'./image/a1.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':2,
        'name':'earphone',
        'src':'./image/a3.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':3,
        'name':'data cable',
        'src':'./image/a3.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':4,
        'name':'mobile phone',
        'src':'./image/a2.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },  
    {
        'id':5,
        'name':'dictionary',
        'src':'./image/a4.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':6,
        'name':'tv',
        'src':'./image/a4.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':7,
        'name':'router',
        'src':'./image/a2.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':8,
        'name':'keboard',
        'src':'./image/a3.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':9,
        'name':'mouse',
        'src':'./image/a2.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':10,
        'name':'mobile',
        'src':'./image/a2.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':11,
        'name':'ipad 2',
        'src':'./image/a4.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':12,
        'name':'chlak',
        'src':'./image/a3.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':13,
        'name':'glass',
        'src':'./image/a2.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':14,
        'name':'shampoo',
        'src':'./image/a3.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    },
    {
        'id':15,
        'name':'shoap',
        'src':'./image/a2.jpg',
        'discriptions': "Eos omnis et dolore officia modi doloribus saepe quasi sequi voluptatum nam blanditiis, atque suscipit eum est esse quas labore laboriosam excepturi?"
    }
]




showgallery(gallery)


function showgallery(cur){
    document.getElementById("card").innerText = "";
    for(var i=0; i<cur.length; i++){
        document.getElementById('card').innerHTML += `
            <div class="col-md-4 mt-3">
                <div class="card p-3 ps-5 pe-5">
                    <h4 class="text-capitalize text-center"> ${cur[i].name}</h4>
                    <img src="${cur[i].src}" width="100%" width="356px">
                    <p class="mt-2">${cur[i].discriptions}</p>
                    <button class="btn btn-primary w-100 mx-auto "> more </button>
                </div>
            </div
        `
    }
}




document.getElementById('myinput').addEventListener('keyup', function(){
    let text = document.getElementById('myinput').value;
    far = gallery.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }
    })

    if(this.value ==""){
        showgallery(gallery);
    }else{
        if(far == ""){
            document.getElementById('para').style.display = "block";
            document.getElementById('card').innerHTML = "";
        }else{
            showgallery(far);
            document.getElementById('para').style.display = "none";
        }
    }
})