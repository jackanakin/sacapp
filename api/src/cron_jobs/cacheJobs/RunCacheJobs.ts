
class RunCacheJobs {
    async run() {
        try {
            console.log("Running cache jobs:" + new Date());

        } catch (err) {
            console.log(err);
        }
        console.log("Finished running cache jobs:" + new Date());
    }
}

export default new RunCacheJobs();