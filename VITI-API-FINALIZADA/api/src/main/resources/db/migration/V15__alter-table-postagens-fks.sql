
-- Adicionar colunas permitindo nulos
ALTER TABLE postagens
ADD COLUMN profissional_id BIGINT,
ADD COLUMN paciente_id BIGINT,
ADD COLUMN data DATETIME;

-- Adicionar FK para profissionais
ALTER TABLE postagens
ADD CONSTRAINT fk_postagens_profissional_id
FOREIGN KEY (profissional_id)
REFERENCES profissionais(id);

-- Adicionar FK para pacientes
ALTER TABLE postagens
ADD CONSTRAINT fk_postagens_paciente_id
FOREIGN KEY (paciente_id)
REFERENCES pacientes(id);


