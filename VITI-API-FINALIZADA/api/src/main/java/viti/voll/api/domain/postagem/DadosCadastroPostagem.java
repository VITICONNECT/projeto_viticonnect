package viti.voll.api.domain.postagem;

import jakarta.validation.constraints.NotBlank;



public record DadosCadastroPostagem(

        @NotBlank
        String titulo,
        @NotBlank
         String mensagem,

        String comentario
) {
}

