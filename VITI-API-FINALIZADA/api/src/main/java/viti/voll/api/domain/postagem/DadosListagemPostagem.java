package viti.voll.api.domain.postagem;


import java.time.LocalDateTime;

public record DadosListagemPostagem(Long id, String titulo, String mensagem
, String comentario, LocalDateTime dataPostagem) {

    public DadosListagemPostagem(Postagem postagem) {
        this(postagem.getId(), postagem.getTitulo(), postagem.getMensagem(), postagem.getComentario(), postagem.getDataPostagem());
    }


}
