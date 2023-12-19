create table postagens(

    id bigint not null auto_increment,
    titulo varchar(255) not null,
    mensagem varchar (255) not null,
    comentario varchar(255) not null,
    ativo tinyint not null,
    primary key(id)
);