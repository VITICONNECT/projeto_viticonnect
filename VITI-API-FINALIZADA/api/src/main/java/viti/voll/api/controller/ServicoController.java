package viti.voll.api.controller;


import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import viti.voll.api.domain.profissional.Especialidade;
import viti.voll.api.domain.profissional.Profissional;
import viti.voll.api.domain.profissional.ProfissionalRepository;
import viti.voll.api.domain.servico.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.net.URI;
import java.util.Optional;


@RestController
@RequestMapping("servicos")
@SecurityRequirement(name = "bearer-key")
public class ServicoController {

    @Autowired
    private ServicoRepository servicoRepository;

    @Autowired
    private ProfissionalRepository profissionalRepository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrar(@RequestBody @Valid DadosCadastroServico dados, UriComponentsBuilder uriBuilder, Authentication authentication) {

        if (authentication != null && authentication.getPrincipal() instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String email = userDetails.getUsername();

            Profissional profissional = profissionalRepository.findByEmail(email);
            Optional<Profissional> profissionalOptional = Optional.ofNullable(profissional);
            if (profissionalOptional.isPresent()) {
                Profissional profissionalEncontrado = profissionalOptional.get();

                // Criando um novo serviço associado ao profissional obtido
                Servico servico = new Servico(dados, profissionalEncontrado); // Troquei para profissionalEncontrado

                // Salvando o serviço associado ao profissional
                servicoRepository.save(servico);

                // Retornando uma resposta de sucesso, por exemplo:
                var uri = uriBuilder.path("/servicos/{id}").buildAndExpand(servico.getId()).toUri();
                return ResponseEntity.created(uri).body(new DadosDetalhamentoServico(servico));
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Falha na autenticação ou perfil de profissional não encontrado");
    }


    @GetMapping("/especialidade/{especialidade}")
    public ResponseEntity<Page<DadosListagemServico>> listarPorEspecialidade(
            @PathVariable Especialidade especialidade,
            @PageableDefault(size = 10, sort = {"titulo"}) Pageable paginacao
    ) {
        var page = servicoRepository.findAllByProfissionalEspecialidadeAndAtivoTrue(especialidade, paginacao)
                .map(DadosListagemServico::new);

        return ResponseEntity.ok(page);
    }


    @PutMapping
    @Transactional
    public ResponseEntity atualizar(@RequestBody @Valid DadosAtualizacaoServico dados) {

        var servico = servicoRepository.getReferenceById(dados.id());
        servico.atualizarInformacoes(dados);

        return ResponseEntity.ok(new DadosDetalhamentoServico(servico));
    }


    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity excluir(@PathVariable Long id) {
        var servico = servicoRepository.getReferenceById(id);
        servico.excluir();

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/detalhes")
    public ResponseEntity detalharDetalhes(@PathVariable Long id) {
        var servico = servicoRepository.findById(id);
        if (servico.isPresent()) {
            var servicoEncontrado = servico.get();
            var profissional = servicoEncontrado.getProfissional();

            // Aqui você pode criar um objeto que combine os detalhes do serviço e do profissional
            var detalhesServicoComProfissional = new DetalhesServicoComProfissional(servicoEncontrado, profissional);

            return ResponseEntity.ok(detalhesServicoComProfissional);
        } else {
            return ResponseEntity.notFound().build();
        }
}
}


