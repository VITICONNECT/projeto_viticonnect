CREATE TABLE servicos (
    id BIGINT NOT NULL AUTO_INCREMENT,
    Imagem VARCHAR(255),
    Plano VARCHAR(100),
    Titulo VARCHAR(255),
    Descricao VARCHAR(255),
    Vantagens VARCHAR(255),
    Preco DECIMAL(10, 2),
    ativo TINYINT NOT NULL,
    PRIMARY KEY (id)
);

