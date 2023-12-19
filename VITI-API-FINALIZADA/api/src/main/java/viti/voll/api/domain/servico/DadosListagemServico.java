package viti.voll.api.domain.servico;

import viti.voll.api.domain.profissional.Profissional;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record DadosListagemServico(Long id, String descricao
, String titulo, String imagem, LocalDateTime data, String nomeProfissional) {

    public DadosListagemServico(Servico servico) {
        this(servico.getId(), servico.getDescricao(), servico.getTitulo(), servico.getImagem(), servico.getData(), servico.getNomeProfissional());
    }


}
