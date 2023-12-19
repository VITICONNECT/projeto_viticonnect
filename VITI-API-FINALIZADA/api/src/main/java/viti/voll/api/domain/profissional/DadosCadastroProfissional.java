package viti.voll.api.domain.profissional;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import viti.voll.api.domain.endereco.DadosEndereco;

public record DadosCadastroProfissional(


        @NotBlank
        String nome,
        @NotBlank @Email
        String email,
        @NotBlank
        String senha,

        @Pattern(regexp = "\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}")
        String cpf,
        @NotNull
        Especialidade especialidade,
        String telefone,
        String biografia,
        String fotoperfil,

        DadosEndereco endereco
        ) {
}
