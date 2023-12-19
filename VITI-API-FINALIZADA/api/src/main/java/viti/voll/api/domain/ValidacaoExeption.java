package viti.voll.api.domain;

import org.springframework.http.HttpStatus;

public class ValidacaoExeption extends RuntimeException {
    public ValidacaoExeption(String mensagem, HttpStatus unauthorized) {
        super(mensagem);
    }
}
