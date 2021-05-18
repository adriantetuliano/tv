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

    alterarValorCanal();

    console.log(estado)
    alteraValorVolume()
}

function onoff()
{
    volumeAtual = 0;
    canalAtual = 1;

    voMais.disabled  = estado;
    voMenos.disabled = estado;
    chMais.disabled  = estado;
    chMenos.disabled = estado;    

    estado = !estado

    document.getElementById("onoff").value = estado ? "off" : "on"  

    alterarValorCanal();
    alteraValorVolume()
}

function vomais()
{
    volumeAtual++
    console.log("Vol+: ", volumeAtual, (volumeAtual >= 10))
    controlaVolBotao();
    alteraValorVolume()
}

function vomenos()
{
    volumeAtual--
    console.log("Vol-: ", volumeAtual, (volumeAtual < 0))
    controlaVolBotao();  
    alteraValorVolume()
}

function controlaVolBotao()
{
    voMais.disabled  = (volumeAtual >= 10 );
    voMenos.disabled = (volumeAtual <= 0);
}

function chmais()
{
    canalAtual++
    console.log("ch+: ", canalAtual, (canalAtual >= 10))
    controlaChBotao();
    alterarValorCanal();
}
 
function chmenos()
{
    canalAtual--
    console.log("ch-: ", canalAtual,(canalAtual <= 1))
    controlaChBotao();
    alterarValorCanal(); 
}

function controlaChBotao()
{
    chMais.disabled  = (canalAtual >= 10);
    chMenos.disabled = (canalAtual <= 1); 
}

function alterarValorCanal()
{
    document.getElementById("ch-valor").innerHTML = estado ? canalAtual : "...";
}

function alteraValorVolume()
{
    document.getElementById("vol-valor").innerHTML = formataVolume();
}

function formataVolume()
{   
    let item = "";
    
    if (estado)
    {
        for (let i = 0; i <= volumeAtual; i++)
        {
            if (i === 0)
                item = "Mudo";
            else
            if (i === 1)
                item = "|";
            else
                item += "|";
        }
    }
    else
        item = "...";

    return item;
}





