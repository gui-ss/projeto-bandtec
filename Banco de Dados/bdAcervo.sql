create database bdAcervo;
use bdAcervo;

create table tbAcervo(
idAcervo int primary key auto_increment,
nomeAcervo varchar (50),
TelefoneAcervo char (14),
cnpj char (15),
tipo varchar(40),
ruaAvenida varchar (60),
numero int,
bairro varchar (60),
cidade varchar(50),
estado char(2),
cep char (9)
);

create table tbUsuario(
idUsuario int primary key auto_increment,
nomeUsuario varchar (50),
dataNasc char (10),
cpf char(14),
telefoneUsuario char (14),
email varchar (50),
login varchar (30),
senha varchar (20),
fkAcervo int,
foreign key(fkAcervo) references tbAcervo(idAcervo)
);

create table tbSensor(
idSensor int primary key auto_increment,
umidadeMin int,
umidadeMax int,
temperaturaMin int,
temperaturaMax int,
statusSensor varchar (20),
fkAcervo int,
foreign key(fkAcervo) references tbAcervo(idAcervo)
);

create table tbRegistro(
idRegistro int primary key auto_increment,
dataRegistro char(10),
horaRegistro char (5),
regUmidade varchar (20),
regTemperatura varchar(20),
fkSensor int,
foreign key(fkSensor) references tbSensor(idSensor)
);


