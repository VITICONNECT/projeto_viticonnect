-- 1. Remover restrição NOT NULL da coluna `comentario`
ALTER TABLE postagens
MODIFY comentario VARCHAR(255); -- Altera o campo `comentario` para VARCHAR(255) sem a restrição NOT NULL

-- 2. Aumentar o tamanho do campo `comentario` para VARCHAR
ALTER TABLE postagens
MODIFY comentario VARCHAR(500); -- Aumenta o tamanho do campo `comentario` para VARCHAR(500), por exemplo

-- 3. Aumentar o tamanho do campo `mensagem` para VARCHAR
ALTER TABLE postagens
MODIFY mensagem VARCHAR(500); -- Aumenta o tamanho do campo `mensagem` para VARCHAR(500), por exemplo
