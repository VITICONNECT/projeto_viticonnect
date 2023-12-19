package viti.voll.api.domain.profissional;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import viti.voll.api.domain.endereco.Endereco;

import java.util.Collection;
import java.util.Collections;
import java.util.List;


@Table(name = "profissionais")
@Entity(name = "Profissional")
@NoArgsConstructor
@Getter
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Profissional implements UserDetails {




    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;

    private String cpf;


    @Enumerated(EnumType.STRING)
    private Especialidade especialidade;
    private String biografia;
    private String fotoperfil;
    private String telefone;
    private String senha;
    @Embedded
    private Endereco endereco;
    private Boolean ativo;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Profissional(DadosCadastroProfissional dados, BCryptPasswordEncoder passwordEncoder ) {
        this.ativo = true;
        this.nome = dados.nome();
        this.cpf = dados.cpf();
        this.email = dados.email();
        this.senha = passwordEncoder.encode(dados.senha());
        this.biografia = dados.biografia();
        this.fotoperfil = dados.fotoperfil();
        this.telefone = dados.telefone();
        this.especialidade = dados.especialidade();
        if (dados.endereco() != null) {
            this.endereco = new Endereco(dados.endereco());
        }

    }





    public void atualizarInformacoes(DadosAtualizacaoProfissional dados) {
        if(dados.nome() != null) {
            this.nome = dados.nome();
        }

        if(dados.cpf() != null) {
            this.cpf = dados.cpf();
        }
        if(dados.telefone() != null) {
            this.telefone = dados.telefone();
        }
        if(dados.biografia() != null) {
            this.biografia = dados.biografia();
        }
        if(dados.fotoperfil() != null) {
            this.fotoperfil = dados.fotoperfil();
        }
        if (dados.endereco() != null) {
            if (this.endereco != null) {
                this.endereco.atualizarInformacoes(dados.endereco());
            } else {
                this.endereco = new Endereco(dados.endereco());
            }
        }


    }

    public void excluir() {
        this.ativo = false;
    }
}

