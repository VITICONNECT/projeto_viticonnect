package viti.voll.api.domain.paciente;

import jakarta.validation.constraints.NotNull;
import viti.voll.api.domain.endereco.DadosEndereco;

public record DadosAtualizacaoPaciente(
        @NotNull
        Long id,
        String nome,
        String cpf,
        DadosEndereco endereco,
        String telefone,
        String biografia,
        String fotoperfil
) {
}
