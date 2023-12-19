package viti.voll.api.domain.profissional;

import viti.voll.api.domain.endereco.Endereco;

public record DadosDetalhamentoProfissional(Long id, String nome, String email,String senha, String cpf, String telefone, Especialidade especialidade, Endereco endereco, String fotoperfil, String biografia) {

    public DadosDetalhamentoProfissional(Profissional profissional){
        this(profissional.getId(),profissional.getNome(), profissional.getEmail(), profissional.getSenha(), profissional.getCpf(), profissional.getTelefone(), profissional.getEspecialidade(), profissional.getEndereco(), profissional.getFotoperfil(), profissional.getBiografia());
    }

}
