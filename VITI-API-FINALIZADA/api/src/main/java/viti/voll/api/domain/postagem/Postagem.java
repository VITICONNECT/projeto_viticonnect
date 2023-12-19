package viti.voll.api.domain.postagem;

import jakarta.persistence.*;
import lombok.*;
import viti.voll.api.domain.paciente.Paciente;
import viti.voll.api.domain.postagem.DadosAtualizacaoPostagem;
import viti.voll.api.domain.postagem.DadosCadastroPostagem;
import viti.voll.api.domain.profissional.Profissional;
import java.time.LocalDateTime;

@Entity
@Table(name = "postagens")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Postagem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String mensagem;
    private String comentario;
    private Boolean ativo;
    private String fotoperfilUsuario;
    private String nomeUsuario;
    private String especialidade;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profissional_id")
    private Profissional profissional;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;

    @Column(name = "data_postagem")
    private LocalDateTime dataPostagem;

    public Postagem(DadosCadastroPostagem dados) {
        this.ativo = true;
        this.titulo = dados.titulo();
        this.mensagem = dados.mensagem();
        this.comentario = dados.comentario();
        this.dataPostagem = LocalDateTime.now(); // Define a data de postagem como o momento atual
    }

    public void atualizarInformacoes(DadosAtualizacaoPostagem dados) {
        if(dados.mensagem() != null) {
            this.mensagem = dados.mensagem();
        }
        if(dados.titulo() != null) {
            this.titulo = dados.titulo();
        }
        if(dados.comentario() != null) {
            this.comentario = dados.comentario();
        }
    }

    public void excluir() {
        this.ativo = false;
    }
}
