import MyError from "./MyError";
import MyValidation from "./MyValidation";

export default {
    ok: "CONFIRMAR",
    cancel: "CANCELAR",
    expiredSession: {
        title: MyError.session.title,
        body: MyError.session.message
    },

    ChangePassword: {
        handleSubmit: {
            weakPassword: {
                title: MyValidation.defaultTitle,
                body: "Por favor, escolha uma senha maior e mais segura"
            },
            passwordConfirm: {
                title: MyValidation.defaultTitle,
                body: "Confirmação de senha incorreta"
            },
            success: {
                title: "",
                body: "Senha alterada com sucesso"
            }
        }
    },
    ResetPassword: {
        sendNewPassword: {
            missingToken: {
                title: MyValidation.defaultTitle,
                body: "Informe o token recebido no seu email"
            },
            weakPassword: {
                title: MyValidation.defaultTitle,
                body: "Por favor, escolha uma senha maior e mais segura"
            },
            passwordConfirm: {
                title: MyValidation.defaultTitle,
                body: "Confirmação de senha incorreta"
            },
            success: {
                title: "",
                body: "Senha alterada com sucesso"
            }
        }
    }
};
