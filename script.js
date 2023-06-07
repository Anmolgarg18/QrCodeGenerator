const text=document.getElementById('enter');
const size=document.getElementById('size');
const generate=document.getElementById('gen');
const download=document.getElementById('down');

const body=document.querySelector('.body');

let sizes=size.value;
generate.addEventListener('click',(e)=>{
e.preventDefault();
generateqrcode();


});

size.addEventListener('change',(e)=>{
    sizes=e.target.value;
    generateqrcode();
});
function generateqrcode(size)
{  body.innerHTML="";
    new QRCode(body,{
        text:text.value,
        height:sizes,
        width:sizes,
        colorLight:"#fff",
        colorDark:"#000",
    });
}