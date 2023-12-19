    package viti.voll.api.infra.security;

    import com.auth0.jwt.JWT;
    import com.auth0.jwt.algorithms.Algorithm;
    import com.auth0.jwt.exceptions.JWTCreationException;
    import com.auth0.jwt.exceptions.JWTVerificationException;
    import org.springframework.beans.factory.annotation.Value;
    import org.springframework.stereotype.Service;
    import viti.voll.api.domain.paciente.Paciente;
    import viti.voll.api.domain.profissional.Profissional;

    import java.time.Instant;
    import java.time.LocalDateTime;
    import java.time.ZoneOffset;

    @Service
    public class TokenService {

        @Value("${api.security.token.secret}")
        private String secret;

        public String gerarToken(Object usuario){
            try {
                var algoritmo = Algorithm.HMAC256(secret);
                if (usuario instanceof Profissional || usuario instanceof Paciente) {
                    Long id = null;
                    if (usuario instanceof Profissional) {
                        id = ((Profissional) usuario).getId();
                    } else {
                        id = ((Paciente) usuario).getId();
                    }

                    return JWT.create()
                            .withIssuer("API viteconnectapi")
                            .withSubject(getEmail(usuario))
                            .withClaim("id", id != null ? id.toString() : null) // Inclui o ID do usuário como um claim
                            .withExpiresAt(dataExpiracao())
                            .sign(algoritmo);
                } else {
                    throw new IllegalArgumentException("Tipo de usuário não suportado");
                }
            } catch (JWTCreationException exception){
                throw new RuntimeException("Erro ao gerar token JWT", exception);
            }
        }


        public Long getId(String tokenJWT) {
            try {
                var algoritmo = Algorithm.HMAC256(secret);
                return JWT.require(algoritmo)
                        .withIssuer("API viteconnectapi")
                        .build()
                        .verify(tokenJWT)
                        .getClaim("id") // Obtém a claim "id"
                        .asLong(); // Converte para Long
            } catch (JWTVerificationException exception) {
                throw new RuntimeException("Token JWT inválido ou expirado!");
            }
        }

        // Método auxiliar para obter o email do usuário
        private String getEmail(Object usuario) {
            return usuario instanceof Profissional ? ((Profissional) usuario).getEmail() : ((Paciente) usuario).getEmail();
        }

        public String getSubject(String tokenJWT) {
            try {
                var algoritmo = Algorithm.HMAC256(secret);
                return JWT.require(algoritmo)
                        .withIssuer("API viteconnectapi")
                        .build()
                        .verify(tokenJWT)
                        .getSubject();
            } catch (JWTVerificationException exception) {
                throw new RuntimeException("Token JWT inválido ou expirado!");
            }
        }

        private Instant dataExpiracao() {
            return LocalDateTime.now().plusHours(1).toInstant(ZoneOffset.of("-03:00"));
        }
    }