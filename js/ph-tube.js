const handleCategory = async () => {


    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `<a onclick="handleAllVideos('${category.category_id}')" class="tab">${category.category}</a>
        `;
        tabContainer.appendChild(div);
    });

    console.log(data.data);



};

const handleAllVideos = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    console.log(data);

    const cardContainer = document.getElementById('card-container');


    data.data?.forEach((videos) => {
        const div = document.createElement(`div`);
        div.innerHTML = `
        <div class="card w-72  ">
        <figure >
            <img src=${videos?.thumbnail} />
        </figure>

        <div class="card-body ">
            
            <div class="flex space-between  gap-12">
                
                    <img class="w-14 h-14 rounded-full"
                     src=${videos?.authors[0]?.profile_picture} />
                     <h4 class="card-title">${videos.title}</h4>

                     
             </div>
           <div class="">
                     
            
           <div>
           <p class="">${videos?.authors[0]?.profile_name}</p>
           <h5 class="">${videos?.authors[0]?.verified}</h5> 
           </div>

            <p class="">${videos?.others?.views}</p> 

                        </div>
            
            
            
        </div>
        
        
                        


        </div>
    </div>
        `;
        cardContainer.appendChild(div);
    });

    console.log(data.data);
};

handleCategory()