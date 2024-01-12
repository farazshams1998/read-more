const readMore = document.querySelector('.btn');
const text = document.querySelector('.text');

readMore.addEventListener('click',(e)=>{
    text.classList.toggle('show-more')

    if(readMore.innerText === 'Read More'){
        readMore.innerText = 'Read Less';
    }else{
        readMore.innerText = 'Read More';

    }
})