import { CronJob } from "cron";

import RunCacheJobs from "./cacheJobs/RunCacheJobs"

export default function cronJobs() {
    createCacheJobs();
}

function createCacheJobs() {
    new CronJob(
        '0 0 * * *',
        function () {
            RunCacheJobs.run();
        },
        null,
        true,
        'America/Sao_Paulo'
    );
}