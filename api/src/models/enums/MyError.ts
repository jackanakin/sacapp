export default {
  internal: {
    message: "Erro interno, tente novamente",
    code: 500,
  },
  validation: {
    message: "Erro na validação dos dados",
    code: 400,
  },
  conflictedEmail: {
    message:
      "E-mail em uso",
    code: 400,
  },

  expiredToken: {
    message: "Token expirado, volte a etapa anterior e solicite novamente",
    code: 401,
  },
  invalidToken: {
    message: "Token inválido",
    code: 401,
  },
  invalidSignIn: {
    message: "Email ou senha incorreto",
    code: 200,
  },
};
