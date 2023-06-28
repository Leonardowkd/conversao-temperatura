![image](https://github.com/Leonardowkd/conversao-temperatura/assets/98129908/06171066-82f7-46e5-ad4b-19de865a14aa)



Projeto 

Micro servico 
keyclock 
api 
back
chatgpt 


Deploy – front + back – banco de dados – elemento – chat GPT (cluster)


Dev – commit – Pipeline – Docker container image (repo) – Kubernets – Prometeu e grafana 

Empacotar as aplicacoes em imagens docker para exec containers 
Rodar aplicacao em ambiente kubernets local usando k3d 
e ambiente de nuvem com AWS 


_________________________________________________________

Automatizar a entrega com aplicacoes CI/CD com github actions 
Monitorar a aplicacao 
Utilizar a infra como codigo para criar uma infra para agilidade e reaproveitamento


Tecnologias -

Docker 
kubernets
AWS 
k3d
gitHub Actions
grafana
prometeus
terraform


______________________________________________________

pilares -

Cultura – Automacao – Lean – Mensuracao – compartilhamento ( sharing )

CALMS – 5 principios 


Cultura – Base do DEVOPS 
Colaboracao , confianca , comunicacao , trabalho em eqp , Incentivo e aprendizado e melhora continua 
Automacao - 
Velocidade , confiaabilidade , replicacao , execucao 
Automatizar processos revisados e validados
tudo que for manual e repetitivo deve ser automattizado para focar em tarefas maiores 

Lean - 
Eliminar desperdicios e otimizar o fluxo 
diminuir a quantidade de working in progress (diminuir as atividades em execucao)
Maximizar eficiencia e qualidade 

Mensurement – Mensuracao 
O que não e medido não e gerenciado e nem melhorado 
Antecipacao em relacao a problemas , dando uma experiencia melhor ao cliente
Metrificar elementos relevantes , o que não entrega valor , gera custo 

Sharing - 
O conhecimento precisa ser descentralizado
Compartilhamento promove colaboracao e inovacao 
Compartilhar entre equipes gera padronizacao e eficiencia 

_________________________

Etapas .


Plan – Code – Build – Test – Release – Deploy – Operate – monitor 

docker container run ( executar container)
docker container run + imagem ( executar container com imagem)
docker container ls -a (todos containers – exit e run )
docker container ls (ativos)
docker container run --name + imagem  ( altera o nome do container )
docker container rm -f + id ou nome do container ( forca o delete do container )
docker container run --rm ( cria um container e logo ele entra em modo exit )
docker container run -it + imagem /bin/bash (modo interativo e habilita tty)
docker container run mysql ( container com mysql )
docker container run -e + variaveis com -e no inicio mysql ( container com mysql com as variaveis)
docker container run -e  + variaveis com -e no inicio mysql 
docker container stop + ID ( para o container em execucao)
docker container run -e + variaveis com -e no inicio -d mysql ( container mysql modo daemon )
docker logs + ID ( mostra o log do container)
docker exec -it + ID bin/bash + Variaveis ( acesso ao container em execucao) 
docker container run -e + variaveis + -d -p 3306:3306 mysql ( portbind para porta local)
docker build -t ubuntu-curl -f Dockerfile . ( criacao de imagem )
docker build -t ubuntu-curl -f Dockerfile . --no-cache ( criacao de imagem sem cache )
docker image ls ( lista as imagens )
docker prune ( limpa imagens )
docker image rm -f ( deleta a imagem)
docker build t suprem3/ubuntu-curl:v1 . ( cria imagem com usuario e tag )
docker tag ubuntu-curl suprem3/ubuntu-curl:v1 ( renomeia a imagem )
docker push  ( envia a imagem )
docker login ( login no docker hub )
docker logout ( remove as credenciais )





Instrucoes de imagem 

FROM – Inicializa a imagem a partir da base 
WORKDIR – define o diretorio corrente 
RUN – executa o comando 
LABEL – adiciona metadados a imagem
EXPOSE – define o container precisa de porta 
ENV – define a variavel de ambiente 
COPY – copias de arquivos locais para imagem 
ADD- add arquivos para diretorios 
CMD – define o comando para padrao 
ARG – define o argumento pra ser usado no processo de construcao 
ENTRYPOINT – ajuda a configurar o container 
VOLUME – define o volume a ser definido 


























