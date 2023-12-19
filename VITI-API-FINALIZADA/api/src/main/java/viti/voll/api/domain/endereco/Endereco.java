package viti.voll.api.domain.endereco;


import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@NoArgsConstructor
@Getter
@AllArgsConstructor


public class Endereco {

    private String logradouro;
    private String bairro;
    private String cep;
    private String numero;
    private String cidade;
    private String uf;

    public Endereco(DadosEndereco dados) {
        this.bairro = dados.bairro();
        this.cep = dados.cep();
        this.uf = dados.uf();
        this.cidade = dados.cidade();
        this.numero = dados.numero();
    }

    public void atualizarInformacoes(DadosEndereco dados) {
        if(dados.logradouro() !=null){
            this.logradouro = dados.logradouro();
        }
        if(dados.bairro() !=null){
            this.bairro = dados.logradouro();
        }
        if(dados.cep() !=null){
            this.cep = dados.logradouro();
        }
        if(dados.uf() !=null){
            this.uf = dados.logradouro();
        }
        if(dados.cidade() !=null){
            this.cidade = dados.logradouro();
        }
        if(dados.numero() !=null){
            this.numero = dados.logradouro();
        }


    }
}
