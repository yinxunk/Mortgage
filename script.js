const repaymentinput = document.getElementById("repaymentinput");
const interestinput = document.getElementById("interestinput");
const repaymentdiv = document.querySelector('.repayments');
const interestdiv = document.querySelector('.interest');
const rateinput = document.querySelector('#three');
const terminputdiv = document.querySelector('.terminput');
const rateinputdiv = document.querySelector('.rateinput');
const term = document.querySelector('.term');
const rates = document.querySelector('.rates');
const terminput = document.querySelector('#two');
const mortgagetinput = document.querySelector('#one');
const mortgageamountdiv = document.querySelector('.mortgageamount');
const mortgageinputdiv = document.querySelector('.mortgageinput');
const mortgageamountbutton = document.querySelector('#mortgageamountbutton');
const termbutton = document.querySelector('.termbutton');
const ratep = document.querySelector('.rateinput p');
const dark = document.querySelector('.dark');
const emptypage = dark.innerHTML;

const clear = document.getElementById("clearall");
clear.addEventListener('click', () =>{
    const mortgageamount = document.getElementById("one");
    const mortgageterm = document.getElementById("two");
    const interestrate = document.getElementById("three");
    console.log(mortgageamount.value);
    mortgageamount.value = '';
    mortgageterm.value = '';
    interestrate.value = '';
    dark.innerHTML = '';
    dark.innerHTML = emptypage;
})

const button = document.querySelector(".calculate");
button.addEventListener("click", () => {
    const mortgagevalue = mortgagetinput.value;
    const termvalue = terminput.value;
    const ratevalue = rateinput.value;
    console.log(mortgagevalue);
    console.log(termvalue);
    console.log(ratevalue);;
    if(mortgagevalue === ''){
        if(!document.getElementById('errorlabelmv')){
            const label = document.createElement('label');
            label.textContent = "This field is required";
            label.style.color = "red";
            label.id = 'errorlabelmv';
            mortgageamountdiv.appendChild(label);
            mortgageamountbutton.style.color = "white";
            mortgageamountbutton.style.backgroundColor = "red";
            mortgageinputdiv.style.borderColor = "red";
            
        }
        
        
    }
    if( termvalue === ''){
        if(!document.getElementById('errorlabeltv')){
            const label = document.createElement('label');
            label.textContent = "This field is required";
            label.style.color = "red";
            label.id = 'errorlabeltv';
            term.appendChild(label);
            termbutton.style.color = 'white';
            termbutton.style.backgroundColor = "red";
            terminputdiv.style.borderColor = "red";

            
        }
        
    }
    if(ratevalue === ''){
        if(!document.getElementById('errorlabelrv')){
            const label = document.createElement('label');
            label.textContent = "This field is required";
            label.style.color = "red";
            label.id = 'errorlabelrv';
            rates.appendChild(label);
            ratep.style.color = 'white';
            ratep.style.backgroundColor = "red";
            rateinputdiv.style.borderColor = "red";

            
        }
        
    }
    else {
        const dark = document.querySelector('.dark');
        dark.innerHTML = '';
        
        if(repaymentinput.checked){
            ratepercent = ratevalue/100;
            
            const total = mortgagevalue * ((ratepercent/12) * Math.pow(1 + (ratepercent/12), (termvalue*12))) /(Math.pow(1 + (ratepercent/12), (termvalue*12)) - 1);
            const totalround = Number.parseFloat(total).toFixed(2);
            const totalterm = Number.parseFloat(mortgagevalue) + Number.parseFloat(total);
            const totaltermround = Number.parseFloat(totalterm).toFixed(2);
            const totaldiv = document.createElement('div');
            const description = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = "Your results";
            h3.style.color = "white"
            const p = document.createElement('p');
            p.textContent = "Your results are shown below baed on the information you provided. To adjust the results, edit the form and click \"calculate repayments\" again."
            p.style.color = 'hsl(200, 26%, 54%)';
            p.style.paddingBottom = '2em';
            p.style.fontSize = '13px'
            description.appendChild(h3);
            description.appendChild(p);
            // description.style.width = "80%";
            description.style.alignSelf = "center";
            const results = document.createElement("div");
            results.style.borderRadius = "10px";
            results.style.borderTop = "4px solid hsl(61, 70%, 52%)";
            results.style.backgroundColor = "hsl(201, 57%, 11%)";
            // results.style.width = '80%';
            results.style.alignSelf = "center";
            const resultlabel = document.createElement('label');
            resultlabel.textContent = "Your monthly repayments";
            resultlabel.style.color = 'hsl(200, 26%, 54%)';
            const h1 = document.createElement('h1');
            h1.textContent = `£${totalround}`;
            h1.style.color = 'hsl(61, 70%, 52%)';
            h1.style.fontSize = '3em';
            h1.style.margin = '0.2em 0 0.3em 0';
            const hr = document.createElement('hr');
            const termlabel = document.createElement('label');
            termlabel.textContent = "Total you'll repay over the term";
            termlabel.style.color = 'hsl(200, 26%, 54%)'
            const h3term = document.createElement('h3');
            h3term.textContent = `£${totaltermround}`
            h3term.style.color = 'white';
            results.appendChild(resultlabel);
            results.appendChild(h1);
            results.appendChild(hr);
            results.appendChild(termlabel);
            results.appendChild(h3term);  
            results.style.display = "border-box";
            results.style.padding = '5%'
            totaldiv.appendChild(description);
            totaldiv.appendChild(results);
            dark.appendChild(totaldiv);
            totaldiv.style.padding = "2% 7% 7% 7% "
            description.style.maxWidth = "100%"
            results.style.maxWidth = "100%"
            // dark.appendChild(description);
            // dark.appendChild(results);
            
    
        }
        else {
            const total = (mortgagevalue * (ratevalue/100) * termvalue);
            const value = document.createElement("p");
            value.textContent = `${total}`;
            dark.appendChild(value);
        }
    }
    
    
})




repaymentdiv.style.borderColor = "hsl(61, 70%, 52%)";
repaymentdiv.style.backgroundColor = "hsl(60, 55%, 83%)"

repaymentinput.addEventListener("click", () => {
    repaymentdiv.style.borderColor = "hsl(61, 70%, 52%)";
    repaymentdiv.style.backgroundColor = "hsl(60, 55%, 83%)"
    interestdiv.style.borderColor = "hsl(201, 29%, 46%)"
    interestdiv.style.backgroundColor = "white"
})

interestinput.addEventListener("click", () => {
    interestdiv.style.borderColor = "hsl(61, 70%, 52%)";
    interestdiv.style.backgroundColor = "hsl(60, 55%, 83%)"
    repaymentdiv.style.borderColor = "hsl(201, 29%, 46%)"
    repaymentdiv.style.backgroundColor = "white"
    
})


mortgagetinput.addEventListener("focus", () =>{
    const label = document.getElementById('errorlabelmv');
    if(label){
        label.remove();
    }
    mortgageinputdiv.style.borderColor = '';
    mortgageamountbutton.style.color = '';
    mortgageamountbutton.style.backgroundColor ='';
})

terminput.addEventListener("focus", () =>{
    const label = document.getElementById('errorlabeltv');
    if(label) {
        label.remove();
    }
    terminputdiv.style.borderColor = '';
    termbutton.style.backgroundColor = '';
    termbutton.style.color = '';
})

rateinput.addEventListener("focus", () =>{
    const label = document.getElementById('errorlabelrv');
    if(label) {
        label.remove();
    }
    rateinputdiv.style.borderColor = '';
    ratep.style.backgroundColor = '';
    ratep.style.color = '';
})