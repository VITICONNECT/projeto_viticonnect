create table pacientes(

    id bigint not null auto_increment,
    nome varchar(100) not null,
    email varchar(100) not null unique,
    cpf varchar(14) unique,
    logradouro varchar(100),
    bairro varchar(100),
    cep varchar(9) ,
    complemento varchar(100),
    numero varchar(20),
    uf char(2),
    cidade varchar(100) ,
    telefone varchar(20),
    ativo tinyint not null,

    primary key(id)

);