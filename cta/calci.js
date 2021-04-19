function sp(){
    const salesProfit=document.getElementById("salesProfit");
    salesProfit.innerHTML=(pDeviceSlider.value)*(pMarginSlider.value);
}

function rsp(){
    const rSalesProfit=document.getElementById("rsalesProfit");
    rSalesProfit.innerHTML=(rMarginSlider.value)*(rDeviceNoSlider.value);
}

function etp(){
    const tp=document.getElementById("eTotalProfit");
    const total=((pDeviceSlider.value)*(pMarginSlider.value))+((rMarginSlider.value)*(rDeviceNoSlider.value));
    const softwareCharge=500+90;
    tp.innerHTML=total-softwareCharge;
}


const pDevice=document.getElementById("pDeviceNo");
const pDeviceSlider=document.querySelectorAll("input")[0];
pDevice.innerHTML=pDeviceSlider.value;
document.getElementById("ipVal1").innerHTML=pDeviceSlider.value
pDeviceSlider.oninput= (()=>{
    pDevice.innerHTML=pDeviceSlider.value;
    document.getElementById("ipVal1").innerHTML=pDeviceSlider.value;
    sp();
    etp();
});

const pMarginDevice=document.getElementById("pMarginDevice");
const pMarginSlider=document.querySelectorAll("input")[1];
pMarginDevice.innerHTML=pMarginSlider.value;
document.getElementById("ipVal2").innerHTML=pMarginSlider.value
pMarginSlider.oninput= (()=>{
    pMarginDevice.innerHTML=pMarginSlider.value;
    document.getElementById("ipVal2").innerHTML=pMarginSlider.value
    sp();
    etp();
});

sp();

const rMargin=document.getElementById("rMargin");
const rMarginSlider=document.querySelectorAll("input")[2];
rMargin.innerHTML=rMarginSlider.value;
document.getElementById("ipVal3").innerHTML=rMarginSlider.value
rMarginSlider.oninput= (()=>{
    rMargin.innerHTML=rMarginSlider.value;
    document.getElementById("ipVal3").innerHTML=rMarginSlider.value
    rsp();
    etp();
});

const rDeviceNo=document.getElementById("rDeviceNo");
const rDeviceNoSlider=document.querySelectorAll("input")[3];
rDeviceNo.innerHTML=rDeviceNoSlider.value;
document.getElementById("ipVal4").innerHTML=rDeviceNoSlider.value;
rDeviceNoSlider.oninput=(()=>{
    rDeviceNo.innerHTML=rDeviceNoSlider.value;
    document.getElementById("ipVal4").innerHTML=rDeviceNoSlider.value;
    rsp();
    etp();
    
});

rsp();

etp();


