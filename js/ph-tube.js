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
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure >
            <img src=${videos?.thumbnail} />
        </figure>

        <div class="card-body ">
            <h2 class="card-title">${videos.title}</h2>
            

           
            <div class="card-footer flex justify-between mt-8">
            <div class="flex">
                <div class="w-14 rounded-full">
                    <img src=${videos?.authors[0]?.profile_picture} />
                    <p class="">${videos?.authors[0]?.profile_name}</p> 
                </div>
            </div>
        </div>
        
                        <div>
                            <h6></h6>
                        </div>


        </div>
    </div>
        `;
        cardContainer.appendChild(div);
    });

    console.log(data.data);
};

handleCategory()