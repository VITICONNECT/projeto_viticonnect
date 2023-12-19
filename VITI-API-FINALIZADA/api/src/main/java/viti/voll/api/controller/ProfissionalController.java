package viti.voll.api.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.expression.ExpressionException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import viti.voll.api.domain.profissional.*;
import viti.voll.api.domain.servico.DadosCadastroServico;
import viti.voll.api.domain.servico.Servico;
import viti.voll.api.domain.servico.ServicoRepository;

@RestController
@RequestMapping("profissionais")
@SecurityRequirement(name = "bearer-key")

public class ProfissionalController {


    @Autowired
    private ProfissionalRepository repository;

    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public ProfissionalController(BCryptPasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroProfissional dados, UriComponentsBuilder uriBuilder) {

        var profissional = new Profissional(dados, passwordEncoder);

        repository.save(profissional);

        var uri = uriBuilder.path("/profissionais/{id}").buildAndExpand(profissional.getId()).toUri();

        return ResponseEntity.created(uri).body(new DadosDetalhamentoProfissional(profissional));
    }




    @GetMapping
    public ResponseEntity<Page<DadosListagemProfissional>> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        var page = repository.findAllByAtivoTrue(paginacao).map(DadosListagemProfissional::new);

        return  ResponseEntity.ok(page);
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoProfissional dados){

        var profissional = repository.getReferenceById(dados.id());
        profissional.atualizarInformacoes(dados);

        return ResponseEntity.ok(new DadosDetalhamentoProfissional(profissional));
    }


    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id){
        var profissional = repository.getReferenceById(id);
        profissional.excluir();

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity detalhar(@PathVariable Long id){
        var profissional = repository.getReferenceById(id);
        return ResponseEntity.ok(new DadosDetalhamentoProfissional(profissional));
    }


}

