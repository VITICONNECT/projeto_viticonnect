package viti.voll.api.domain.postagem;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record DadosAtualizacaoPostagem(
        @NotNull
        Long id,
        String titulo,
        String mensagem,
        String comentario
)
{
}
