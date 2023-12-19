create table consultas(

    id bigint not null auto_increment,
    profissional_id bigint not null,
    paciente_id bigint not null,
    data datetime not null,

    primary key(id),
    constraint fk_consultas_profissional_id foreign key(profissional_id) references profissionais(id),
    constraint fk_consultas_paciente_id foreign key(paciente_id) references pacientes(id)

);