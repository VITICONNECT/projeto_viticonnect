package viti.voll.api.infra.exception;


import jakarta.persistence.EntityNotFoundException;
import viti.voll.api.domain.ValidacaoExeption;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorDeErros {

@ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity tratarErro404(){

        return ResponseEntity.notFound().build();

    }

    @ExceptionHandler(MethodArgumentNotValidException.class)

    public ResponseEntity tratarErro400(MethodArgumentNotValidException ex){

    var erros = ex.getFieldErrors();
    return ResponseEntity.badRequest().body(erros.stream().map(DadosErroValidacao::new).toList());

    }

    @ExceptionHandler(ValidacaoExeption.class)
    public ResponseEntity tratarErroRegraDeNegocio(ValidacaoExeption ex){
     return ResponseEntity.badRequest().body(ex.getMessage());
    }


    private record DadosErroValidacao(String campo, String mensagem){

        public DadosErroValidacao (FieldError erro){

                this(erro.getField(),erro.getDefaultMessage());

        }

    }


}
