package viti.voll.api.domain.servico;


import viti.voll.api.domain.endereco.Endereco;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record DadosDetalhamentoServico(Long id,  String titulo,  String imagem, LocalDateTime data) {



    public DadosDetalhamentoServico(Servico servico){
        this(servico.getId(), servico.getTitulo(), servico.getImagem(), servico.getData());
    }




}
