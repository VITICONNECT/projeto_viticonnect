package viti.voll.api.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import viti.voll.api.domain.paciente.Paciente;
import viti.voll.api.domain.paciente.PacienteRepository;
import viti.voll.api.domain.postagem.*;
import viti.voll.api.domain.profissional.Especialidade;
import viti.voll.api.domain.profissional.Profissional;
import viti.voll.api.domain.profissional.ProfissionalRepository;

@RestController
@RequestMapping("postagens")
@SecurityRequirement(name = "bearer-key")
public class PostagemController {

    @Autowired
    private PostagemRepository postagemRepository;

    @Autowired
    private ProfissionalRepository profissionalRepository;

    @Autowired
    private PacienteRepository pacienteRepository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroPostagem dados, UriComponentsBuilder uriBuilder, Authentication authentication) {

        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String email = userDetails.getUsername();

            Profissional profissional = profissionalRepository.findByEmail(email);
            Paciente paciente = pacienteRepository.findByEmail(email);

            if (profissional != null || paciente != null) {
                Postagem postagem = new Postagem(dados);

                if (profissional != null) {
                    postagem.setProfissional(profissional);
                } else {
                    postagem.setPaciente(paciente);
                }

                postagemRepository.save(postagem);

                var uri = uriBuilder.path("/postagens/{id}").buildAndExpand(postagem.getId()).toUri();
                return ResponseEntity.created(uri).build(); // Retorna apenas o status 201 com a URI
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Falha na autenticação ou dados incompletos.");
    }

    @GetMapping
    public ResponseEntity<Page<DadosListagemPostagem>> listar(@PageableDefault(size = 10, sort = {"titulo"}) Pageable paginacao) {
        var page = postagemRepository.findAllByAtivoTrue(paginacao).map(DadosListagemPostagem::new);

        return ResponseEntity.ok(page);
    }

    @PutMapping
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoPostagem dados){

        var postagem = postagemRepository.findById(dados.id());

        if (postagem.isPresent()) {
            postagem.get().atualizarInformacoes(dados);
            return ResponseEntity.ok().build(); // Retorna apenas o status 200 sem corpo de resposta
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id){
        var postagem = postagemRepository.findById(id);

        if (postagem.isPresent()) {
            postagem.get().excluir();
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity detalhar(@PathVariable Long id) {
        var postagem = postagemRepository.findById(id);

        if (postagem.isPresent()) {
            Postagem postagemEncontrada = postagem.get();
            Profissional profissional = postagemEncontrada.getProfissional();
            Paciente paciente = postagemEncontrada.getPaciente();

            String nomeUsuario = (profissional != null) ? profissional.getNome() : (paciente != null) ? paciente.getNome() : null;
            String fotoPerfilUsuario = (profissional != null) ? profissional.getFotoperfil() : (paciente != null) ? paciente.getFotoperfil() : null;
            Especialidade especialidadeProfissional = (profissional != null && profissional.getEspecialidade() != null) ? profissional.getEspecialidade() : null;

            DadosDetalhamentoPostagem dadosDetalhamento = new DadosDetalhamentoPostagem(
                    postagemEncontrada.getId(),
                    postagemEncontrada.getTitulo(),
                    postagemEncontrada.getMensagem(),
                    postagemEncontrada.getComentario(),
                    postagemEncontrada.getAtivo(),
                    postagemEncontrada.getDataPostagem(),
                    nomeUsuario,
                    fotoPerfilUsuario,
                    especialidadeProfissional  // Adicionando a especialidade do profissional
            );

            return ResponseEntity.ok(dadosDetalhamento);
        }

        return ResponseEntity.notFound().build();
    }



}
