
//Retail Site [Dom Manipulation]


    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of men’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            optionTags: ["Shoes", "Shirts", "Outer Wear", "Accessories"],
            productImages: [
                {
                    name: 'Shoes',
                    pic: "https://images.unsplash.com/photo-1559334417-01b38aec66bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                },
                {
                    name: 'Pants',
                    pic: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                },
                {
                    name: 'Shirts',
                    pic: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                },
                {
                    name: 'Jackets',
                    pic: "https://images.unsplash.com/photo-1669479033025-01bc44921fff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                },
                {
                    name: 'Jewelry',
                    pic: "https://images.unsplash.com/photo-1533657957778-3d76a086a95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                },
                {
                    name: 'Accessories',
                    pic: "https://images.unsplash.com/photo-1646933597890-c52f3033a230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of women’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        
        },
             
            
       
        kids: {
        
            headImage: "https://images.unsplash.com/photo-1622218286192-95f6a20083c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
            optionTags: ["Mini Footwear", "Small Shirts", "Lil Outer Wear", "Tiny Hats"],
            productImages: [
                {
                    name: 'Shoes',
                    pic: "https://images.unsplash.com/photo-1622253543934-c3cb280f8323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                },
                {
                    name: 'Pants',
                    pic: "https://images.unsplash.com/photo-1666379685317-f37a716bc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                },
                {
                    name: 'Shirts',
                    pic: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
                },
                {
                    name: 'Jackets',
                    pic: "https://images.unsplash.com/photo-1591851395349-6d8c2fe76e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1458546450666-ebb1e605853f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80"
                },
                {
                    name: 'Accessories',
                    pic: "https://images.unsplash.com/photo-1643042945810-1119948eeabc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of children’s pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        
    }
}

// -----------------------

const mensButtons = document.querySelector('.mens')
console.log(mensButtons)
const womensButton = document.querySelector('.womens')
console.log(womensButton)
const kidsButton = document.querySelector('.kids')
console.log(kidsButton)

const mainImage = document.querySelector('.topPic')
console.log(mainImage)



const options = document.querySelectorAll('.choice')
console.log( options )

const productContainer = document.querySelector('.productContainer')
console.log( productContainer)


const pic = document.querySelector('.polaroid')


const textBox= document.querySelector('.textContainer')




const changeMainImage = (type) =>{
    if( type === 'mens'){
        mainImage.src = majorContainer.mens.headImage
    }else if(type === 'womens'){
        mainImage.src = majorContainer.womens.headImage
     } else if(type === 'kids'){
            mainImage.src = majorContainer.kids.headImage
        }
    }


 
    const changeOptions = (type) =>{
  
        if(type === 'mens'){
            type = majorContainer.mens.optionTags
        } else if(type === 'womens'){
            type = majorContainer.womens.optionTags
        } else if(type === 'kids')
            type = majorContainer.kids.optionTags
        console.log(type)

       
        for(let i = 0; i < type.length; i++){
            console.log('for loop', options[i].innerText )
            console.log(`Category ${type[i]}`)
            options[i].innerText = type[i]
        }
    
    }




const changeProduct = (type) =>{
    if(type === 'mens'){
        type = majorContainer.mens.productImages
    } else if (type === 'womens'){
        type = majorContainer.womens.productImages
    } else if (type === 'kids'){
        type = majorContainer.kids.productImages
    }
    
    console.log(type)

  
    productContainer.innerHTML = "";

    
  

    for ( let i = 0; i < type.length; i++){
        let imgTag = document.createElement(`img`)
        imgTag.setAttribute("src",type[i].pic); 
        imgTag.setAttribute("class", "product")
        console.log(imgTag)
        productContainer.append(imgTag)
    }

    }


    


 
const changeAll = (type) => {
    changeMainImage(type)
    changeOptions(type)
    changeProduct(type)

}
