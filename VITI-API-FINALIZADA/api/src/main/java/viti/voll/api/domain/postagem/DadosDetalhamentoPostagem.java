package viti.voll.api.domain.postagem;

import viti.voll.api.domain.paciente.Paciente;
import viti.voll.api.domain.profissional.Especialidade;
import viti.voll.api.domain.profissional.Profissional;

import java.time.LocalDateTime;

public record DadosDetalhamentoPostagem(
        Long id,
        String titulo,
        String mensagem,
        String comentario,
        Boolean ativo,
        LocalDateTime dataPostagem,
        String nomeUsuario,
        String fotoPerfilUsuario,
        Especialidade especialidade
) {

    public DadosDetalhamentoPostagem(Postagem postagem, Profissional profissional, Paciente paciente){
        this(
                postagem.getId(),
                postagem.getTitulo(),
                postagem.getMensagem(),
                postagem.getComentario(),
                postagem.getAtivo(),
                postagem.getDataPostagem(),
                (profissional != null) ? profissional.getNome() : (paciente != null) ? paciente.getNome() : null,
                (profissional != null) ? profissional.getFotoperfil() : (paciente != null) ? paciente.getFotoperfil() : null,
                (profissional != null && profissional.getEspecialidade() != null) ? profissional.getEspecialidade() : null
        );
    }
}
