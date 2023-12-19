package viti.voll.api.domain.servico;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import viti.voll.api.domain.profissional.Especialidade;

public interface ServicoRepository extends JpaRepository<Servico, Long> {


    Page<Servico> findAllByAtivoTrue(Pageable paginacao);

    Page<Servico> findAllByProfissionalEspecialidadeAndAtivoTrue(Especialidade especialidade, Pageable paginacao);


}
