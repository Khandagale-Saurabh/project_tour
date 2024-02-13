// Make change on line 88 and 95  and cal new function on line 32 adjust css on id
let img11='./OIP.jpg'
let img2='./scr1.png'
let res_img='./resources.webp'


window.addEventListener('click', function(e){   
    let maindiv=document.getElementById('maindiv')
    if (document.getElementById('oip').contains(e.target)){
      // Clicked in box
      console.log('Inside BOX');
      this.document.getElementById('wrong').style.display='none'
    } else{
      // Clicked outside the box
      
      console.log('OutSide BOX');
      this.document.getElementById('wrong').style.display='block'
      this.document.getElementById('wrong').style.position='absolute'
      
    }
  });


window.addEventListener('load',()=>{
    let maindiv=document.getElementById('maindiv')
    document.getElementById('oip').style.borderStyle='dotted';
    console.log('on load');
    let card=document.createElement('div')
    // let id=document.createAttribute('id','lamo')
     card.setAttribute('id','lamo')
    card.classList.add('card')

    let img1=document.createElement('img')
    img1.classList.add('card-img-top')
    img1.src='./scr1.png';
    card.appendChild(img1);

    let card_body=document.createElement('div');
        card_body.setAttribute('id','visible')
    var aTag = document.createElement('a');
    // aTag.setAttribute('href','./scr1.png')
    
    aTag.innerText="Link Text"
    card_body.appendChild(aTag);
    let p=document.createElement('p');
    p.textContent='Hello I am Paragraph';
    aTag.addEventListener('click',function(){
        console.log('Inside aTag');
       document.getElementById('visible').style.display='none';
       let y=document.getElementById('oip')
    callInvoke(img11)
    })
    card_body.appendChild(p)
    card.appendChild(card_body)
    // card.appendChild(p)
    maindiv.appendChild(card)
// document.body.append(card)


})




function callInvoke(imgtobesend)
{
    console.log('callInvoke');
    let card=document.createElement('div')
    // let id=document.createAttribute('id','lamo')
     card.setAttribute('id','lamo')
    card.classList.add('card')

    let img1=document.createElement('img')
    img1.classList.add('card-img-top')
    img1.src=imgtobesend;
    card.appendChild(img1);

    let card_body=document.createElement('div');
        card_body.setAttribute('id','visible');
    var aTag = document.createElement('a');
    // aTag.setAttribute('href','./scr1.png')
    
    aTag.innerText="Link Text"
    card_body.appendChild(aTag);
    let p=document.createElement('p');
    p.textContent='Hello I am Paragraph';
    aTag.addEventListener('click',()=>{
        console.log('Inside aTag');
       document.getElementById('visible').style.display='none'
     callResources(res_img);
    
    })
    card_body.appendChild(p)
    card.appendChild(card_body)
    // card.appendChild(p)
    maindiv.appendChild(card)
// document.body.append(card)

}

function callResources(imgtobesend)
{
    console.log('callInvoke');
    let card=document.createElement('div')
    // let id=document.createAttribute('id','lamo')
     card.setAttribute('id','lamo')
     card.setAttribute('id','managerres') // on 87
     
    card.classList.add('card')

    let img1=document.createElement('img')
    img1.classList.add('card-img-top')
    img1.setAttribute('id','setheightofres')  //on 94
    img1.src=imgtobesend;
    card.appendChild(img1);

    let card_body=document.createElement('div');
        card_body.setAttribute('id','visible')
        // card_body.setAttribute('id','managerres')
    var aTag = document.createElement('a');
    // aTag.setAttribute('href','./scr1.png')
    
    aTag.innerText="Link Text"
    card_body.appendChild(aTag);
    let p=document.createElement('p');
    p.textContent='Hello I am Paragraph';
    aTag.addEventListener('click',()=>{
        console.log('Inside aTag');
       document.getElementById('visible').style.display='none'
    })
    card_body.appendChild(p)
    card.appendChild(card_body)
    // card.appendChild(p)
    maindiv.appendChild(card)
// document.body.append(card)

}
