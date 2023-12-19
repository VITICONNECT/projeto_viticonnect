package viti.voll.api.domain.paciente;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {

    Paciente findByEmail(String email);

    Page<Paciente> findAllByAtivoTrue(Pageable paginacao);

    @Query("""
            select a.ativo
            from Paciente a
            where
            a.id = :id
            """)
    Boolean findAtivoById(Long id);
}
