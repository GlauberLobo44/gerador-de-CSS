/*
keywords sorteio:redbull, improvavel, devclub
*/

let btn=document.querySelector('.btn');
let key= "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"
let adress="https://api.groq.com/openai/v1/chat/completions";

async function gerarCodigo(){
    let text=document.querySelector('.text').value;
    let blocoCodigo=document.querySelector('.bloco-codigo');
    let resultadoCodigo=document.querySelector('.resultado-codigo');
    let resp= await fetch(adress, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
             model:"llama-3.3-70b-versatile",
                messages:[
                    {
                    role:"system",
                    content:"você é um código gerador de HTML e CSS, responda somente com código puro, nunca use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML, Siga EXATAMENTE o que o usuário pedir, se pedir algo quicando use translateY no @keyframes, Se pedir algo girando use rotate"
                },
                {
                    role:"user",
                    content:text
                }
            ]
        })      
    })
    let dados= await resp.json();
    let resultado=dados.choices[0].message.content
    blocoCodigo.textContent=resultado

    resultadoCodigo.srcdoc=resultado
}

btn.addEventListener('click', gerarCodigo)