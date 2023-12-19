package viti.voll.api.domain.servico;

import viti.voll.api.domain.profissional.Profissional;

public class DetalhesServicoComProfissional {
    private Servico servico;
    private Profissional profissional;

    public DetalhesServicoComProfissional(Servico servico, Profissional profissional) {
        this.servico = servico;
        this.profissional = profissional;
    }

    public Servico getServico() {
        return servico;
    }

    public Profissional getProfissional() {
        return profissional;
    }
}
