import MyError from "../strings/MyError";
import MyValidation from "../strings/MyValidation";

interface APIErrorParser {
    isValidation?: boolean,
    isNetwork?: boolean,
    isSessionExpired?: boolean,
    isBackend?: boolean,
    isFirebase?: boolean,
    isUnknwon?: boolean,

    error: string
}

export default function apiErrorParser(error: any): APIErrorParser {
    try {
        const strError = String(error);
        let parsedError: APIErrorParser = {
            error: strError
        };

        // Yup validation errors
        if (strError.includes("ValidationError:")) {
            let finalYupError = ""
            error.inner.forEach((element: any) => {
                finalYupError += element.message + "\n";
            });

            parsedError.isValidation = true;
            parsedError.error = finalYupError;
            return parsedError;
        }

        //Axios network error {server down, device without network, etc...}
        if (error.message && error.message === "Network Error") {
            parsedError.isNetwork = true;
            parsedError.error = MyError.axios.network;
            return parsedError;
        } else if (error.message && error.message === "timeout of 3000ms exceeded") {
            parsedError.isNetwork = true;
            parsedError.error = MyError.axios.network;
            return parsedError;
        }

        //Backend errors
        if (error.response) {
            parsedError.isBackend = true;
            if (error.response.status === 401) {
                parsedError.isSessionExpired = true;
                parsedError.error = "Too many requests, please try again later";
            } else if (error.response.status === 429) {
                parsedError.error = "Too many requests, please try again later";
                return parsedError;
            }

            const errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.error)
                    ? error.response.data.error
                    : "Falha na requisição";

            parsedError.error = errorMessage;
            return parsedError;
        }
    } catch (parseError) {
        return {
            isUnknwon: true,
            error: String(parseError)
        } as APIErrorParser;
    }

    return {
        isUnknwon: true,
        error: String(error)
    } as APIErrorParser;
}