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

    const response2 = await fetch(`https://openapi.programming-hero.com/api/videos/category/$%7Bid%7D`);
    const data2 = await response2.json();

    console.log(data);
    console.log(data2);

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";



    if (data.data && data.data.length > 0) {
        data.data?.forEach((videos) => {
            const div = document.createElement(`div`);
            div.innerHTML = `
        <div class=" w-72  ">
        <figure >
            <img src=${videos?.thumbnail} />
        </figure>

        <div class="card-body ">
            
            <div class="flex space-evenly  gap-8">
                
                    <img class="w-14 h-14 rounded-full "
                     src=${videos?.authors[0]?.profile_picture} />
                     <h4  class="card-title whitespace-nowrap ">${videos.title}</h4>

                     
             </div>
           <div class="">
                     
            
           <div class="flex text-center ml-12 gap-2 ">
           <p class="">${videos?.authors[0]?.profile_name}</p>
           

           


           <h5 >
    
    ${videos?.authors[0]?.verified ? '<span class="verified-badge">Verified</span>' : ''}
</h5>

           
    
           </div>

            <p class="text-center">${videos?.others?.views}</p> 

                        </div>
            
            
            
        </div>
        
        
                        


        </div>
    </div>
        `;
            cardContainer.appendChild(div);
        });
    }


    else {
        console.error('Error:', error);
    }


};



handleCategory()
handleAllVideos("1000")
