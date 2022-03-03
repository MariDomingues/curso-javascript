export class autenticacao {

    static login(pAutenticavel, pSenha) {

        if (autenticacao.isAutenticavel(pAutenticavel)) {
            
            return pAutenticavel.autenticar(pSenha);
        }

        return false;
    }

    static isAutenticavel(pAutenticavel) {

        return "autenticar" in pAutenticavel &&
        pAutenticavel.autenticar instanceof Function;
    }
}