alert('hello world');

console.log('hello world');

console.warn('hello world');

console.info('hello world');

console.error('hello world');

document.write('hello world');

function olaMundo(){
    let olaMundo = 'hello world';
    return olaMundo;
};

function olaMundo(){
    let mundo = 'world';
    let ola = 'hello';
    let resultado = ola + ' ' + mundo
    return resultado;
}console.log (olaMundo());

function arrumaEscrita(){
    let bagunca = 'dreqscethell oworlddaetq';
    let arruma = bagunca.slice(8, 19);
    return arruma;
}console.log(arrumaEscrita());

function apareceEscrita(){
    const btn = document.querySelector('#btn_clique_aqui');
    const container = document.querySelector('.container');    
    btn.addEventListener('click', function(){
        if(container.style.display === 'block'){
            container.style.display = 'none';
        }else{
            container.style.display = 'block';
        }
    })
}console.log(apareceEscrita())