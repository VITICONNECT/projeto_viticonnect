ALTER TABLE servicos
ADD COLUMN profissional_id bigint,
ADD constraint fk_servicos_profissional_id foreign key(profissional_id) references profissionais(id);



