import { getHours } from "date-fns";

export function getGreetings(): string {
    const dayTime = getHours(new Date());

    if (dayTime >= 6 && dayTime < 13) {
        return "Bom dia";
    } else if (dayTime >= 13 && dayTime < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}