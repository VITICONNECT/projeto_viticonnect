package viti.voll.api.domain.servico;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import viti.voll.api.domain.profissional.Profissional;

import java.time.LocalDateTime;

@Table(name = "servicos")
@Entity(name = "servico")
@NoArgsConstructor
@Getter
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String descricao;
    private LocalDateTime data;

    private String imagem;
    private Boolean ativo;
    @ManyToOne
    @JoinColumn(name = "profissional_id")
    private Profissional profissional;
    private String nomeProfissional;



    public Servico(DadosCadastroServico dados, Profissional profissional) {
        this.ativo = true;
        this.titulo = dados.titulo();
        this.imagem = dados.imagem();
        this.data = LocalDateTime.now();
        this.descricao = dados.descricao();
        this.profissional = profissional;
    }

    public String getNomeProfissional() {
        return this.profissional != null ? this.profissional.getNome() : null;
    }


    public void atualizarInformacoes(DadosAtualizacaoServico dados) {

        if (dados.titulo() != null) {
            this.titulo = dados.titulo();
        }
        if (dados.descricao() != null) {
            this.descricao = dados.descricao();
        }
        if (dados.imagem() != null) {
            this.imagem = dados.imagem();
        }
    }

    public void excluir() {
        this.ativo = false;
    }
}
