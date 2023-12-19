package viti.voll.api.domain.profissional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.Optional;

public interface ProfissionalRepository extends JpaRepository<Profissional, Long> {

    Profissional findByEmail(String email);

    Page<Profissional> findAllByAtivoTrue(Pageable paginacao);

    @Query("SELECT p FROM Profissional p WHERE p.email = :email")
    Optional<Profissional> findByUsername(@Param("email") String email);


    Boolean findAtivoById(Long id);
}
