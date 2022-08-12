var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeproduto = document.querySelector('input[name=nome_produto]');
    var precoproduto = document.querySelector('input[name=price]');

    items.push({
        nome: nomeproduto.value,
        valor: precoproduto.value
    });

   // adiciona produtos dentro nas caixas de texto

   let listaprodutos = document.querySelector('.lista-produtos');
   let soma = 0;
   listaprodutos.innerHTML = "";
   items.map(function(val){
        // soma produtos
        soma+=parseFloat(val.valor);
        //insere produtos com esse formato
        listaprodutos.innerHTML+=`
        <div class="lista-produtos-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
        <button name="cancelar">Cancelar</button>
        </div>
        `;

   })
   soma = soma.toFixed(2);
   nomeproduto.value = ""
   precoproduto.value = ""

   let elementosoma = document.querySelector('.soma-produto h1');
   elementosoma.innerHTML = 'Total R$' + soma
});

//limpa a soma total
document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items =[];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = 'Total R$';

})

