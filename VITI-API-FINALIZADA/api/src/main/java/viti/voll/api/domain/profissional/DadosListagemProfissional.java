package viti.voll.api.domain.profissional;

public record DadosListagemProfissional(Long id, String nome, String email, Especialidade especialidade, String fotoperfil) {

    public DadosListagemProfissional(Profissional profissional) {
        this(profissional.getId(),profissional.getNome(), profissional.getEmail(), profissional.getEspecialidade(), profissional.getFotoperfil());
    }

}