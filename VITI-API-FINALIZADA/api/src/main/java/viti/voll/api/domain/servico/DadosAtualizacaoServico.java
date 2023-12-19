package viti.voll.api.domain.servico;

import jakarta.validation.constraints.NotNull;
import viti.voll.api.domain.endereco.DadosEndereco;

import java.math.BigDecimal;

public record DadosAtualizacaoServico(
        @NotNull
        Long id,
        String preco,
        String titulo,
        String descricao,
        String imagem
)
{
}
