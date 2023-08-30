const handleCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json()
    const tabContainer = document.getElementById('tab-container')
    const trimeData = data.data.news_category.slice(0, 3);
    trimeData.forEach(category => {
        const div = document.createElement('div')
        div.innerHTML = `
        <a onclick = handleLoadNews('${category.category_id}') class="tab text-lg">${category.category_name}</a>

        `;
        tabContainer.appendChild(div)
    });

   
};
 
const handleLoadNews = (categoryId) => {
    console.log(categoryId);
}









handleCategory()