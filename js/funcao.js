let estado 
let voMais
let voMenos
let chMais
let chMenos

let volumeAtual
let canalAtual

function carregar()
{
     estado = false 
     volumeAtual = 0
     canalAtual = 1

    voMais = document.getElementById("volmais")
    voMenos = document.getElementById("volmenos")
    chMais = document.getElementById("chmais")
    chMenos = document.getElementById("chmenos") 

    voMais.disabled  = true;
    voMenos.disabled = true;
    chMais.disabled  = true;
    chMenos.disabled = true;
}

function onoff()
{
    volumeAtual = 0;
    canalAtual = 1;

    if(estado)
    {
        estado = false
        voMais.disabled  = true;
        voMenos.disabled = true;
        chMais.disabled  = true;
        chMenos.disabled = true;
    }
    else 
    {
        estado = true
        voMais.disabled  = false;
        voMenos.disabled = false;
        chMais.disabled  = false;
        chMenos.disabled = false;
    }

    console.log(`Vol: ${volumeAtual} CH: ${canalAtual}`)
}

function vomais()
{
    volumeAtual++
    console.log("Vol+: ", volumeAtual)

    if(volumeAtual >= 10 )
    {
        voMais.disabled  = true;
    }
   else
   {
       voMenos.disabled = false;
   }
}

function vomenos()
{
    volumeAtual--
    console.log("Vol-: ", volumeAtual)

    if(volumeAtual < 1)
    {
        voMenos.disabled  = true;
    }
    else
    {
        voMais.disabled = false;
    }
    
}

function chmais()
{
    canalAtual ++
    console.log("ch+: ", canalAtual)
    if(canalAtual >= 10) 
    {
        chMais.disabled  = true;
    }
    else
    {
        chMenos.disabled  = false;
    }
}
 
function chmenos()
{
    canalAtual --
    console.log("ch-: ", canalAtual)
    if(canalAtual <= 2)
    {
        chMenos.disabled = true;
    }
    else
    {
        chMais.disabled = false;
    }
}