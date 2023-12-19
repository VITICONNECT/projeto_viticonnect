package viti.voll.api.controller;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import viti.voll.api.domain.ValidacaoExeption;
import viti.voll.api.domain.paciente.Paciente;
import viti.voll.api.domain.profissional.DadosAutenticacao;
import viti.voll.api.domain.profissional.Profissional;
import viti.voll.api.infra.security.DadosTokenJWT;
import viti.voll.api.infra.security.TokenService;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/profissional") // Endpoint para login de profissional
    public ResponseEntity efetuarLoginProfissional(@RequestBody @Valid DadosAutenticacao dados) {

        var authenticationToken = new UsernamePasswordAuthenticationToken(dados.email(), dados.senha());

        try {
            var authentication = manager.authenticate(authenticationToken);
            if (authentication.getPrincipal() instanceof Profissional) {
                var tokenJWT = tokenService.gerarToken((Profissional) authentication.getPrincipal());
                return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
            }
        } catch (AuthenticationException e) {
            // Trate aqui possíveis exceções de autenticação
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @PostMapping("/paciente") // Endpoint para login de paciente
    public ResponseEntity efetuarLoginPaciente(@RequestBody @Valid DadosAutenticacao dados) {

        var authenticationToken = new UsernamePasswordAuthenticationToken(dados.email(), dados.senha());

        try {
            var authentication = manager.authenticate(authenticationToken);
            if (authentication.getPrincipal() instanceof Paciente) {
                var tokenJWT = tokenService.gerarToken((Paciente) authentication.getPrincipal());
                return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));

            }
        } catch (AuthenticationException exception) {
            // Trate aqui possíveis exceções de autenticação
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}


