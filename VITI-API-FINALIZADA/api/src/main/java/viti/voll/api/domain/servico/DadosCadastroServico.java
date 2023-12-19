package viti.voll.api.domain.servico;

import jakarta.validation.Valid;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import viti.voll.api.domain.endereco.DadosEndereco;

import java.math.BigDecimal;


public record DadosCadastroServico(
    @NotBlank
    String titulo,
    @NotBlank
    String descricao,
    @NotBlank
        String imagem


) {
}

