package viti.voll.api.domain.paciente;

import viti.voll.api.domain.endereco.Endereco;

public record DadosDetalhamentoPaciente(Long id, String nome, String email, String senha, String cpf,String telefone, Endereco endereco, String fotoperfil, String biografia) {

    public DadosDetalhamentoPaciente (Paciente paciente){
        this(paciente.getId(),paciente.getNome(), paciente.getEmail(), paciente.getSenha(), paciente.getCpf(), paciente.getTelefone(), paciente.getEndereco(), paciente.getFotoperfil(), paciente.getBiografia());
    }

}
