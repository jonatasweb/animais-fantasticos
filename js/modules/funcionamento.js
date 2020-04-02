function initFuncionamento() {
	const funcionamento = document.querySelector('[data-semana]') //aqui vem todo o LI
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number) //map retorna uma nova array e já sobreponho na var
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number) //mesma coisa pro horário, retorna uma array com Numbers

  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

  const horarioAberto = (horarioAgora>= horarioSemana[0] && horarioAgora < horarioSemana[1]);

  if(semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto')
  } else {
    funcionamento.classList.add('fechado')
  }

  //para comparar vou transformar a string em array, mais fácil para comparar valores
  //Vou usar o split() onde ele achar vírgula ele separa como itens.
  //O conteúdo vai vir como strings, quero como números de fato
  //Para isso uso o map(), que retorna uma nova array. E se eu usar o macete map(Number) ele já vai retornar tudo em formato de number
}

export default initFuncionamento();




