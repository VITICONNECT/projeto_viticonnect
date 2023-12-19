package viti.voll.api.domain.profissional;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import viti.voll.api.domain.paciente.Paciente;
import viti.voll.api.domain.paciente.PacienteRepository;
import viti.voll.api.infra.security.TokenService;

@Service
public class AutenticacaoService implements UserDetailsService {

    @Autowired
    private ProfissionalRepository profissionalRepository;

    @Autowired
    private PacienteRepository pacienteRepository;

    @Autowired
    private TokenService tokenService; // Injetando o serviço para geração do token



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Profissional profissional = profissionalRepository.findByEmail(username);
        if (profissional != null) {
            return profissional;
        } else {
            Paciente paciente = pacienteRepository.findByEmail(username);
            if (paciente != null) {
                return paciente;

            } else {
                throw new UsernameNotFoundException("Usuário não encontrado");
            }
        }
    }

    public String gerarToken(String username, String senha) {
        Profissional profissional = profissionalRepository.findByEmail(username);
        if (profissional != null && profissional.getSenha().equals(senha)) {
            return tokenService.gerarToken(profissional);
        }
        Paciente paciente = pacienteRepository.findByEmail(username);
        if (paciente != null && paciente.getSenha().equals(senha)) {
            return tokenService.gerarToken(paciente);
        }
        // Trate a falha na autenticação
        throw new UsernameNotFoundException("Falha na autenticação");
    }

}