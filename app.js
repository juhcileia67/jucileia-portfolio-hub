const projects = {
  learn: { kicker: 'PROJETO PRINCIPAL · EM DESENVOLVIMENTO', title: 'Learn Educação', lead: 'Uma proposta de ecossistema conectado entre aluno, professor, instituição e uma assistente educacional com IA.', items: [['Problema', 'Explorar uma experiência educacional séria sem parecer pesada ou distante para o aluno.'], ['Direção', 'Usar tecnologia como apoio ao professor e ao aprendizado, sem substituir o processo pedagógico.'], ['O que já existe', 'Protótipos Android, conceitos de site e estudos de fluxos para aluno e professor.'], ['Próximo passo', 'Escolher o núcleo de um primeiro piloto e buscar feedback de pessoas reais.']] },
  axia: { kicker: 'CONCEITO · IA EDUCACIONAL', title: 'AXIA', lead: 'Mais do que um chat: uma ideia de apoio contextual que explica, orienta e ajuda a organizar o estudo.', items: [['Princípio', 'Ajudar o aluno a chegar à resposta, sem eliminar o processo de aprendizagem.'], ['Possibilidades', 'Explicações adaptadas, revisão, planos de estudo e ajuda contextual.'], ['Apoio ao professor', 'Leitura de dificuldades recorrentes e sugestões de reforço ainda em exploração.'], ['Cuidados', 'Privacidade, segurança e limites claros precisam fazer parte da solução.']] },
  mobile: { kicker: 'EXPERIMENTAÇÃO · MOBILE', title: 'Experiências Android', lead: 'Protótipos criados para entender como ideias de produto funcionam em telas, fluxos e uso real no celular.', items: [['Formato', 'Versões visuais e funcionais construídas com ferramentas acessíveis pelo celular.'], ['Foco', 'Navegação, clareza, hierarquia visual e conexão entre etapas.'], ['Processo', 'Criar, comparar, ajustar e testar novas versões.'], ['Estágio', 'Algumas partes funcionam; outras são estudos e hipóteses de interface.']] },
  studies: { kicker: 'LABORATÓRIO · PESQUISA E UX', title: 'Estudos de produto e UX', lead: 'Um espaço para investigar referências, comparar alternativas e aprender sem transformar todo teste em produto final.', items: [['Pesquisa', 'Comparação de soluções e observação de padrões de mercado.'], ['Exploração visual', 'Variações de identidade, composição e organização de interfaces.'], ['Produto', 'Hipóteses sobre problemas, públicos e caminhos possíveis.'], ['Aprendizado', 'Cada experimento ajuda a escolher o que manter, ajustar ou descartar.']] },
  student: { kicker: 'LEARN · EXPERIÊNCIA DO ALUNO', title: 'Aprender percebendo a própria evolução', lead: 'O aluno entra com um código de turma e encontra uma experiência de estudo conectada ao seu contexto.', items: [['Experiência', 'Atividades, matérias, agenda, progresso, plano de estudos e histórico.'], ['AXIA', 'Ajuda contextual para explicar, dar pistas e organizar o estudo.'], ['Conquistas', 'Incentivos individuais, sem criar competição entre estudantes.'], ['Princípio', 'A mensagem principal é simples: “Eu evoluí.”']] },
  teacher: { kicker: 'LEARN · EXPERIÊNCIA DO PROFESSOR', title: 'Apoiar o professor sem aumentar o trabalho', lead: 'O professor acompanha o que acontece nas turmas e encontra sinais úteis para decidir quando e como intervir.', items: [['Acompanhamento', 'Turmas, alunos, atividades, entregas, progresso e dificuldades.'], ['Adaptação', 'Uma atividade pode manter o mesmo objetivo e oferecer apoios diferentes.'], ['AXIA', 'Pode ajudar a organizar informações e sugerir caminhos.'], ['Princípio', 'A tecnologia deve ajudar o professor, não criar novas tarefas.']] },
  school: { kicker: 'LEARN · INSTITUIÇÃO', title: 'Experiências conectadas à realidade da escola', lead: 'A visão institucional conecta alunos, professores e indicadores sem ignorar os sistemas que a escola já utiliza.', items: [['Visão', 'Turmas, professores, alunos, aprendizagem e dificuldades.'], ['Indicadores', 'Uso do sistema, progresso e relatórios.'], ['Integração', 'Evoluir sem exigir que tudo seja substituído de uma vez.'], ['Estágio', 'Hipótese de produto que ainda precisa ser validada com instituições reais.']] },
  axiaDeep: { kicker: 'LEARN · AXIA', title: 'Uma IA pensada para ajudar a aprender', lead: 'A proposta da AXIA não é simplesmente responder perguntas, mas apoiar o processo de raciocínio.', items: [['Para o aluno', 'Explicar, dar pistas, fazer perguntas e dividir problemas em etapas.'], ['Personalização', 'Adaptar explicações, apoiar a organização e acompanhar dificuldades.'], ['Para o professor', 'Organizar informações, identificar padrões e sugerir caminhos.'], ['Limite importante', 'Evitar entregar respostas prontas e preservar o papel humano na educação.']] },
  product: { kicker: 'APTIDÕES · PRODUTO', title: 'Do problema à visão do todo', lead: 'Habilidades desenvolvidas enquanto transformo necessidades em experiências e protótipos.', items: [['Visão de produto', 'Transformar um problema em uma ideia de produto e conectar suas partes.'], ['Pensamento sistêmico', 'Enxergar relações entre usuário, instituição, tecnologia e experiência.'], ['Criatividade aplicada', 'Gerar soluções e variações a partir de problemas reais.']] },
  experience: { kicker: 'APTIDÕES · EXPERIÊNCIA', title: 'Como isso será vivido por quem usa?', lead: 'Meu olhar combina clareza, coerência visual e atenção ao uso real.', items: [['UX intuitivo', 'Perceber quando uma tela, fluxo ou função não está clara ou agradável.'], ['Sensibilidade visual', 'Composição, identidade, imagens, vídeos e apresentação.'], ['Comunicação visual', 'Apresentar ideias de forma clara, coerente e interessante.'], ['Foco no usuário', 'Partir de como a experiência será vivida, não apenas de como a função opera.']] },
  execution: { kicker: 'APTIDÕES · EXECUÇÃO', title: 'Uma ideia precisa ganhar forma', lead: 'Uso ferramentas acessíveis para aproximar a execução daquilo que imaginei.', items: [['Prototipagem com IA', 'Transformar conceitos em protótipos e testar variações.'], ['Iteração', 'Identificar o que não funciona e reformular a solução.'], ['Persistência', 'Continuar testando alternativas até tornar a ideia demonstrável.']] },
  connections: { kicker: 'APTIDÕES · CONEXÕES', title: 'Observar atritos e imaginar possibilidades', lead: 'Tenho facilidade para perceber relações e caminhos que ainda não estão óbvios.', items: [['Identificação de problemas', 'Perceber atritos em experiências existentes.'], ['Conexão de ideias', 'Juntar conceitos separados e imaginar uma experiência maior.'], ['Curiosidade tecnológica', 'Explorar ferramentas e plataformas para descobrir possibilidades.']] }
};

const cards = [...document.querySelectorAll('.project-card')];
const searches = [...document.querySelectorAll('[data-search]')];
const filters = [...document.querySelectorAll('.filter')];
const grid = document.querySelector('#project-grid');
const count = document.querySelector('#result-count');
const empty = document.querySelector('.empty-state');
let activeFilter = 'todos';
let query = '';

function updateProjects() {
  let visible = 0;
  cards.forEach(card => {
    const haystack = card.innerText.toLowerCase() + ' ' + card.dataset.tags;
    const categoryMatch = activeFilter === 'todos' || card.dataset.tags.includes(activeFilter);
    const queryMatch = !query || haystack.includes(query);
    const show = categoryMatch && queryMatch;
    card.hidden = !show;
    if (show) visible += 1;
  });
  count.textContent = `${visible} ${visible === 1 ? 'projeto encontrado' : 'projetos encontrados'}`;
  empty.hidden = visible !== 0;
}

searches.forEach(input => input.addEventListener('input', event => {
  query = event.target.value.trim().toLowerCase();
  searches.forEach(other => { if (other !== event.target) other.value = event.target.value; });
  updateProjects();
}));

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  activeFilter = button.dataset.filter;
  updateProjects();
}));

document.querySelectorAll('.view-toggle').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.view-toggle').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  grid.classList.toggle('list', button.dataset.view === 'list');
}));

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
document.querySelectorAll('.open-project').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  dialogContent.innerHTML = `<span class="dialog-kicker">${project.kicker}</span><h2 class="dialog-title">${project.title}</h2><p class="dialog-lead">${project.lead}</p><div class="dialog-grid">${project.items.map(([title, text]) => `<div><strong>${title}</strong><span>${text}</span></div>`).join('')}</div>`;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
