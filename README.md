# Anotações do curso DevOps do Fabricio Veronez #

#RUMOAOELITE

Vamos aprender - Docker, kubernetes, terraform, jenkins, prometheus e grafana.

Devops Ã© uma cultura colaborativa, que engloba uma serie de PrÃ¡ticas, Ferramentas e Filosofias, que tem como objetivo automatizar e padronizar os processos de produÃ§Ã£o de software bem como tambÃ©m integrar as equipes de desenvolvimento e infraestrutura e garantir mais produtividade e confiabilidade na entrega das aplicaÃ§Ãµes.

Os Fundamentos do devops. 

A cultura devops se basea em 5 pilares, conhecido pela sigla "CALMS", Cultura, AutomaÃ§Ã£o, Lean ou EsforÃ§o, MediÃ§Ã£o e Compartilhamento. 

O primeiro pilhar a "Cultura" fala sobre a mudanÃ§a de pensamento e comportamento pra tornar as equipes colaborativas e comunicativas entre si, promovendo uma relaÃ§Ã£o mais saudavel entre elas e essa mudanÃ§a de pensamento precisa atingir todo o fluxo devops desde o planejamento do software pensando na integraÃ§Ã£o dos processos pensando nas equipes de desenvolvimento, QA e OperaÃ§Ãµes atÃ© chegar ao cliente. Outra mudanÃ§a importante de pensamento Ã© com relaÃ§Ã£o ao foco na qualidade do produto e nÃ£o sÃ³ mais ali nas tarefas que dessa forma todos os profissionais passa a se responsabilizar como equipe por eventuais falhas e trabalha em conjunto para resolver o mais rapido possivel, acaba com aquela historia que a culpa Ã© do dev ou a culpa Ã© do sysadmin, a culpa passa a ser da equipe multidiciplinar e todos colaboram para que o negocio sai vencedor

No quisito "AutomaÃ§Ã£o" devops defende a construÃ§Ã£o de piplines por processos repetitivos e que consome tempo dos profissionais aumentando muito a produtividade da equipe, com isso algumas atividades que poderiam durar dias passa a durar horas ou atÃ© minutos e assim vocÃª envita falhas humanas disnecessaria em processos manuais evita o desgastes e a dismotivaÃ§Ã£o do proficional.

Outro pilar importante dis respeito aos conceitos de "Lean" a cultura devops defende o uso de mÃ©todologias ageis no processo de criaÃ§Ã£o de software de modo a promover o aumento da frequencia do ensicros ou seja as entegras com maior quantidade e tambÃ©m as entregas mais curtas ou seja utilizando esprints e dessa forma as soluÃ§Ãµes chega muito mais rapidas para os clientes e podem ser validadas e otimizadas com maior velocidade tambÃ©m.

Com relaÃ§Ã£o as "MÃ©tricas" a cultura devops tambÃ©m defende que oque nÃ£o Ã© medido nÃ£o pode ser otimizado, por isso as sessÃµes de fedbacks e a escolha das metricas sÃ£o partes muito importantes no devops tanto no qe diz respeito a otimizaÃ§Ã£o de processos quanto a otimizaÃ§Ã£o do proprio software.

Outro pilar caracteristicos do devops Ã© o "Compartilhamento" a ideia Ã© que as equipes compartilhe entre si conhecimentos e experiencias bem sucedidas ou nÃ£o pra realmente proporciona a equipe inteira uma evoluÃ§Ã£o garantindo sempre a melhoria continua.



COMO FUNCIONA A CULTURA DEVOPS.

Como vocÃª jÃ¡ deve saber o ciclo de vida devops Ã© representado pelo simbolo do infinito, justamente para identificar a necessidade da melhoria continua se repetindo o tempo todo a cada entrega, Ã© importante lembrar que as equipes se comunicam e se colabora entre si em todas as fases garantindo o aliamento do time, a velocidade nas entregas e a qualidade do trabalho.
SÃ£o 8 fases que fazem parte do ciclo devops:

Planejamento, CodificaÃ§Ã£o, ConstruÃ§Ã£o ou Build, Teste, empacomento ou release, deploy, operaÃ§Ã£o e monitoramento. 

Planejamento Ã© a parte do projeto onde vocÃª organiza oque vai ser feito, como, quem e quando vai ser entregue, ou seja, vocÃª define as tarefas, as agendas dos membros da equipe e as ferramentas que seram utilizadas, lembrando sempre de utilizar os conceitos da mÃ©todologia agio, como por exemplo as esprints de entrega e compartilhamento de informaÃ§Ãµes entre as equipes, atravÃ©s das ferramentas de gerenciamento de projetos como: jira, nochao, trello, slack ou teams.

Na fase de condificaÃ§Ã£o os desenvolvedores vÃ£o codificar e revisar ali todo o cÃ³digo, o git Ã© muito utilizado para controle de versÃ£o pois alem de ser muito eficiente Ã© gratuito e opensource e alem disso Ã© fundamental o uso de uma ferramenta de compartilhamento entre equipes, como github ou gitlab.

A fase de Build Ã© onde os cÃ³digos construidos pelos desenvolvedores sÃ£o convertidos em um entregavel ambiente, Ã© aqui que se inicia a pip-line de "CIA" nesse momento eu vou utilizar as ferramentas de gerenciamento de pacotes como: mavem, npm e nugget junto com o docker e ferramentas de pip-line de CIA como o jenkis, github accions ou gitlab cia.

A fase de testes Ã© onde Ã© executados os testes, as analises de cÃ³digo e verificaÃ§Ãµes de falhas, ou seja, Ã© onde eu testo realmente o se o cÃ³digo criado tem algum problema Ã© aqui que entra algumas ferramentas como jeyunit, nunit, sonarkilb e claro tudo isso rodando na pip-line de CIA.

Na fase de Release Ã© aonde eu gero o artefato de entrega, pode ser meu arquivo executavel, a minha imagem docker, o meu arquivo ali .ja ou a, enfim Ã© oque vai ser usado para fazer o deploy em meu ambiente, e nesse ponto Ã© que entram as pip-lines de CID.

No deploy Ã© aonde a aplicaÃ§Ã£o Ã© entregue no ambiente e aqui Ã© onde entra em cena as ferramentas de infraestrutura como cÃ³digo, como o terraform e o assimble, alem de serviÃ§o de cloud como: aws, azure e google. tudo isso integrado na pip-line de "CID".

Quando chega na operaÃ§Ã£o eu preciso garantir que a aplicaÃ§Ã£o vai ser executada no ambiente com instabilidade, confiabilidade e resiliencia, e aqui o kubernetes ele entra como protagonista como a principal ferramenta de orquestraÃ§Ã£o de container no mercado.

Com a aplicaÃ§Ã£o entregue sendo executada no ambiente chega a hora de monitorar toda a informaÃ§Ã£o e coletar as metricas para aplicaÃ§Ã£o e tambÃ©m do ambiente, para ser utilizadas no planejamento das melhorias alem disso Ã© claro a atencipar qualquer tipo de problema que possa acontecer e Ã© aqui que entra as ferramentas como: prometheus, ieger, elastic e grafana. todos entra em aÃ§Ã£o em forma simutanea.
Depois volta dnv para o ciclo de planejamento e tudo recomeÃ§a.      



A METODOLOGIA SE BASEA EM 5 FUNDAMENTOS

FOCO, PRÃTICA, HABILIDADES PESSOAIS (SOFT SKILLS), POSICIONAMENTO E RELACIONAMENTO.

EM CADA UMA DESSAS AULAS DA SERIE EU VOU ME APROFUNDAR EM UM DESSES FUNDAMENTOS.



.: DOCKER Ã‰ ESCRITO EM GO.

NAMESPACES:
- PARA FORNECER O ESPAÃ‡O DE TRABALHO ISOLADO CHAMADO CONTÃŠINER, NAMESPACES FORNECEM UMA CAMADA DE ISOLAMENTO.

* PID NAMESPACE: ISOLAMENTO DO PROCESSO.
* NET NAMESPACE: GERENCIANDO INTERFACES DE REDE.
* IPC NAMESPACE: GERENCIANDO O ACESSO AOS RECURSOS DO IPC.
* MNT NAMESPACES: GERENCIANDO PONTOS DE MONTAGEM DO SISTEMA DE ARQUIVOS.
* UTS NAMESPACE: ISOLANDO O KERNEL E IDENTIFICADORES DE VERSÃƒO.

CONTROL GROUPS:
- O CGROUP LIMITA UM APLICATIVO A UM CONJUNTO DE RECURSOS. POR EXEMPLO, VOCÃŠ PODE LIMITAR A MEMÃ“RIA DISPONIVEL PARA UM CONTÃŠINER ESPECÃFICO.

UNION FILE SYSTEMS:
- O SISTEA DE ARQUIVOS DA UNIÃƒO, Ã‰ UM SISTEMA DE ARQUIVO QUE OPERA CRIANDO CAMADAS, TORNANDO-AS MUITO LEVES E RÃPIDAS.

DESCRIÃ‡ÃƒO BREVE DE IMAGEM E CONTAINER:

- IMAGEM:
 * UMA IMAGEM Ã‰ UM MODELO SOMENTE LEITURA COM INSTRUÃ‡Ã•ES PARA CRIAR UM CONTÃŠINER.

- CONTAINER:
 * UM CONTÃŠINER Ã‰ UMA INSTÃ‚NCIA EXECUTÃVEL DE UMA IMAGEM.
 
# COMEÃ‡ANDO COM O DOCKER #

-Buscar imagem-
docker search ubuntu
docker search alpine
docker search --limit 6 ubuntu          #Buscar as imagens com um limit pesquisa.
docker search --filter stars=30 ubuntu  #Buscar as imagens com filtro de quantidade de estrela.
docker search --no-trunc=true ubuntu    #Buscar as imagens desabilitando a abreviÃ§Ã£o.

-Baixar imagem-
docker pull alpine           #Baixar a versÃ£o latest.
docker pull ubuntu:16.04     #Baixar uma versÃ£o.
docker pull -a alpine        #Baixar todas as versÃµes. 

-Listar imagem-
docker image ls
docker images

-Remover imagem-
docker rmi ubuntu:16.04
docker image rm [id ou nome]
dcoker image prune -a        #Remover todas as imagens.

-Criar container-
docker run -it ubuntu        #Cria um container interativo, vocÃª entra no terminal do container, se sair ele morre.
docker run -dit ubuntu       #Cria um container em backuground.
docker run -dit --name [nome do container] alpine    #Cria um container em background com o nome que vocÃª definir.


-Listar container-
docker container ls          #Lista todos os container ativos.
docker ps
docker container ls -a       #Lista todos os container ativos e inativos.
docker ps -a


docker container run hello-world
docker container run --name meu_container hello-world
docker container run --rm hello-world
docker container run -it ubuntu /bin/bash
docker container run -it --rm ubuntu /bin/bash
docker container run -d nginx
docker container run -d -p 8080:80 nginx
docker container run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres postgres


docker container exec -it nginx /bin/bash


docker container rm <id_ou_nome_do_container>
docker container rm -f <id ou nome do container>


docker container ls
docker container ls -a



# CRIANDO IMAGEM - DOCKERFILE #

- Dockerfile -
FROM ubuntu
RUN apt update
RUN apt install curl --yes

docker build -t ubuntu-curl .

docker build -t ubuntu-curl -f Dockerfile .

docker imagem ls 

docker container run -it ubuntu-curl /bin/bash

docker image prune

docker image rm <id da imagem ou nome da imagem>

docker tag tuliosuzasl2021/ubuntu-curl:v1 tuliosuzasl2021/ubuntu-curl:latest

- OpÃ§Ãµes de uso no Dockerfile -

FROM = inicializa o build de uma imagem a partir de uma imagem base

WORKDIR = Define o seu diretÃ³rio corrente

RUN = Executa um comando

LABEL = Adiciona metadados a iamgem

EXPOSE = Define que o container precisa expor a porta em questÃ£o

ENV = Define variÃ¡veis de ambiente

COPY = Copia arquivos ou diretÃ³rios e adiciona ao sistema de arquivos da iamgem

ADD = Copia arquivos ou diretÃ³rios remotos e adiciona ao sistema de arquivos da imagem

CMD = Define o comando e/ou os parÃ¢metros padrÃ£o

ARG = Define um argumento pra ser usado no processo de construÃ§Ã£o

ENTRYPOINT = Ajuda vocÃª a configurar um contÃªiner que pode ser executado como um executÃ¡vel

VOLUME = Define volumes que devem ser definidos.


- Docker HUB - 

# OpÃ§Ãµes de Registry #

Docker Hub
Elastic Container Registry
Azure Container Registry
Google Container Registry
Harbor - On primes - rodar em seu dada center em um servidor.

- Subir imagem para o repositorio - 

Nomeando sua imagem Docker

username/repositorio:tag
tuliosouzasl2021/teste:v1

Autenticar -

docker login
Usernamen:
Password:

docker push tuliosouzasl2021/ubuntu-curl:v1



# ConversÃ£o de temperatura #


git clone git@github.com:tuliosouzasl2021/conversao-temperatura.git

Entrar na pasta do projeto e criar o dockerfile

- Dockerfile -
FROM node:19.0.0
WORKDIR /app
COPY package&.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]

Gerar imagem

docker build -t tuliosouzasl2021/conversao-temperatura:v1
docker build -t tuliosouzasl2021/conversao-temperatura:latest

Fazer o push para o dockerhub

docker login
Username:
Password:

docker push tuliosouzasl2021/conversao-temperatura:v1
docker push tuliosouzasl2021/conversao-temperatura:latest

Subir container

docker container run -d -p 8080:8080 tuliosouzasl2021/conversao-temperatura:v1

